import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import { createContext, useEffect, useRef, useState } from "react";
import SimplePeer, { Instance, SignalData } from "simple-peer";
import {
  ParticipantEntity,
  useGetChatWithUserOnlyQuery,
  useGetMeBasicQuery
} from "../GraphQl/graphql";
import { readAuthToken } from "../shared/utils";
import { useAuthStore } from "../store";
export enum VideoState {
  NULL,
  INCALL,
  CALLING,
  CALLED,
}
const accessToken = readAuthToken("accessToken") || "";

let webSocketConnection: WebSocket;

export const VideoChatContext = createContext<any>(null);

export const VideoChatProvider: React.FunctionComponent = ({ children }) => {
  const [VideoChatId, setVideoChatId] = useState();
  const [called, setCalled] = useState<boolean>(false);
  const [offerSignal, setOfferSignal] = useState<SignalData>();
  const [simplePeer, setSimplePeer] = useState<Instance>();
  const [videoStatus, setVideoStatus] = useState<VideoState>(VideoState.NULL);
  const videoSelf = useRef<HTMLVideoElement | null>(null);
  const videoCaller = useRef<HTMLVideoElement | null>(null);
  const accessToken = readAuthToken("accessToken") || "";
  const [selfPic, setSelfPic] = useState<boolean>(true);
  const [guestPic, setGuestPic] = useState<boolean>(false);
  const [mediaStream2, setMediaStream2] = useState<MediaStream>();
  const [videoEnabled, setVideoEnabled] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);

  // let mediaStream2: MediaStream;

  const { isAuthenticated } = useAuthStore();

  const users = useGetChatWithUserOnlyQuery({
    fetchPolicy: "network-only",
    skip: !isAuthenticated,
    variables: {
      entity: {
        id: VideoChatId,
      },
    },
  });

  const me = useGetMeBasicQuery({
    fetchPolicy: "network-only",
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (isAuthenticated) {
      me.refetch();
      users.refetch();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      webSocketConnection = new WebSocket(`${process.env.REACT_APP_WS_URL}videochat`);
      webSocketConnection.onopen = () => {
        webSocketConnection.send(
          JSON.stringify({
            token: accessToken,
            type: "init",
          })
        );
      };
    }
  }, [me.data?.me?.id]);

  useEffect(() => {
    if (isAuthenticated) {
      webSocketConnection.onmessage = (message: any) => {
        const payload = JSON.parse(message.data);
        if (payload?.type === "offer") {
          setVideoChatId(payload.chatId);
          setCalled(true);
          setOfferSignal(payload);
          setVideoStatus(VideoState.CALLED);
        } else if (payload?.type === "answer") simplePeer?.signal(payload);
        else if (payload?.type === "abort") {
          setVideoChatId(undefined);
          setSimplePeer(undefined);
          videoCaller.current = null;
          videoSelf.current = null;
          setVideoStatus(VideoState.NULL);
          mediaStream2?.getTracks().forEach((track) => track.stop());
        }
      };
    }
  }, [simplePeer, me.data?.me?.id]);

  const self = me?.data?.me?.fullname;
  const guest = users?.data?.getChat?.participants?.filter(
    (el) => el?.user?.id !== me?.data?.me?.id
  ) as ParticipantEntity[];

  let guestAcronym;
  if (guest) {
    guestAcronym = guest[0]?.user?.fullname
      ?.split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), "");
  }

  const sendOrAcceptInvitation = (
    isInitiator?: boolean,
    offer?: SignalData
  ) => {
    let hasAudio = false;
    let hasVideo = false;
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach(function (device) {
          if (device.kind === "videoinput") hasVideo = true;
          if (device.kind === "audioinput") hasAudio = true;
        });
      })
      .finally(() => {
        navigator.mediaDevices
          .getUserMedia({ video: hasVideo, audio: hasAudio })
          .then((mediaStream) => {
            setMediaStream2(mediaStream);

            let sp = new SimplePeer({
              trickle: false,
              initiator: isInitiator,
              stream: mediaStream,
            });
            sp.addTransceiver("video");

            if (isInitiator) setVideoStatus(VideoState.CALLING);
            else {
              offer && sp.signal(offer);
            }
            try {
              const video = videoSelf.current;
              video!.srcObject = mediaStream;
              video?.play();
            } catch {
              setSelfPic(true);
            }

            sp.on("signal", (data: any) => {
              const payload = Object.assign(data, {
                token: accessToken,
                chatId: VideoChatId,
              });
              webSocketConnection.send(JSON.stringify(payload));
            });
            // sp.on("connect", () => {
            //   setVideoStatus(VideoState.INCALL);
            // });
            sp.on("stream", (stream: any) => {
              setVideoStatus(VideoState.INCALL);
              try {
                const video = videoCaller.current;
                video!.srcObject = stream;
                video?.play();
              } catch {
                setGuestPic(true);
              }
            });
            setSimplePeer(sp);
          });
      });
  };
  const pay = JSON.stringify({
    chatId: VideoChatId,
    token: accessToken,
    type: "abort",
  });

  const endCall = () => {
    setSimplePeer(undefined);
    webSocketConnection.send(pay);

    videoSelf.current = null;
    videoCaller.current = null;

    setVideoStatus(VideoState.NULL);
    setVideoChatId(undefined);
    mediaStream2?.getTracks().forEach((track) => track.stop());
  };

  const pauseVideo = () => {
    mediaStream2?.getVideoTracks().forEach((t) => (t.enabled = !t.enabled));
    setVideoEnabled(!videoEnabled);
  };
  const pauseSound = () => {
    mediaStream2?.getAudioTracks().forEach((t) => (t.enabled = !t.enabled));
    setAudioEnabled(!audioEnabled);
  };

  return (
    <VideoChatContext.Provider
      value={{ sendOrAcceptInvitation, setVideoChatId }}
    >
      {videoStatus !== VideoState.NULL ? (
        <div className=" w-screen h-screen relative top-0 left-0 bg-gray-700">
          {videoStatus === VideoState.CALLING && (
            <div className="text-white text-center absolute pt-52   h-full w-full text-2xl">
              Calling {guest ? guest[0]?.user?.fullname : ""}
            </div>
          )}
          {videoStatus === VideoState.CALLED && (
            <div className="text-white text-center absolute pt-52  h-full w-full text-2xl">
              {guest ? guest[0]?.user?.fullname : ""} is Calling
            </div>
          )}

          {(videoStatus === VideoState.CALLING ||
            videoStatus === VideoState.CALLED) && (
            <>
              <div className=" w-full h-full flex justify-center items-center ">
                <div className="w-56 h-56 rounded-full bg-green-600 flex items-center justify-center text-white text-6xl">
                  {guestAcronym}
                </div>
              </div>
            </>
          )}
          {videoStatus === VideoState.INCALL && (
            <>
              <div className=" w-full h-full flex justify-center items-center  top-0 absolute">
                <div className="w-56 h-56 rounded-full bg-green-600 flex items-center justify-center text-white text-6xl">
                  {guestAcronym}
                </div>
              </div>
              <video
                className="w-full h-full object-cover absolute top-0 z-20"
                ref={videoCaller}
                playsInline
              />
            </>
          )}
          <div className=" w-32 h-32 absolute top-5 right-5 z-30 ">
            <video ref={videoSelf} playsInline muted />
          </div>
          <div className="absolute left-0 bottom-20 w-full flex justify-center items-center z-30 ">
            {videoStatus === VideoState.CALLED && (
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer bg-green-400 mx-7"
                onClick={() => sendOrAcceptInvitation(false, offerSignal)}
              >
                <CallIcon sx={{ color: "white" }} />
              </div>
            )}
            {(videoStatus === VideoState.INCALL ||
              videoStatus === VideoState.CALLED ||
              videoStatus === VideoState.CALLING) && (
              <div
                onClick={endCall}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-red-400 mx-7 cursor-pointer"
              >
                <CallEndIcon sx={{ color: "white" }} />
              </div>
            )}
            {videoStatus === VideoState.INCALL && (
              <div
                onClick={pauseVideo}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-300 mx-7 cursor-pointer "
              >
                {!videoEnabled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
                    />
                  </svg>
                )}
              </div>
            )}
            {videoStatus === VideoState.INCALL && (
              <div
                onClick={pauseSound}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-300 mx-7 cursor-pointer "
              >
                {!audioEnabled ? (
                  <MicOffOutlinedIcon />
                ) : (
                  <MicNoneOutlinedIcon />
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        children
      )}
    </VideoChatContext.Provider>
  );
};

export default VideoChatContext;
