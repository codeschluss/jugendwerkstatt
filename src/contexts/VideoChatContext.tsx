import { createContext, useEffect, useRef, useState } from "react";
import SimplePeer, { Instance, SignalData } from "simple-peer";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { WS_URL } from "../config/app";
import { readAuthToken } from "../shared/utils";
import { useNavigate } from "react-router-dom";
import {
  ParticipantEntity,
  useGetChatWithUserOnlyQuery,
  useGetMeBasicQuery,
} from "../GraphQl/graphql";
import { PersonRemove } from "@mui/icons-material";
import { useAuthStore } from "../store";

export enum VideoState {
  NULL,
  INCALL,
  CALLING,
  CALLED,
}
const accessToken = readAuthToken("accessToken") || "";

let webSocketConnection = new WebSocket(`${WS_URL}videochat`);

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
  let mediaStream2: MediaStream;

  const { isAuthenticated } = useAuthStore();

  const me = useGetMeBasicQuery({
    fetchPolicy: "network-only",
    skip: !isAuthenticated,
  });
  const users = useGetChatWithUserOnlyQuery({
    skip: !isAuthenticated,
    fetchPolicy: "network-only",
    variables: {
      entity: {
        id: VideoChatId,
      },
    },
  });
  useEffect(() => {
    if (isAuthenticated) {
      me.refetch();
      users.refetch();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (me.data) {
      webSocketConnection.send(
        JSON.stringify({
          token: accessToken,
          type: "init",
        })
      );
    }
  }, [me.data]);

  useEffect(() => {
    webSocketConnection.onmessage = (message: any) => {
      const payload = JSON.parse(message.data);
      console.log(payload, "payload");
      if (payload?.type === "offer") {
        setVideoChatId(payload.chatId);
        setCalled(true);
        setOfferSignal(payload);
        setVideoStatus(VideoState.CALLED);
      } else if (payload?.type === "answer") simplePeer?.signal(payload);
      else if (payload?.type === "abort") {
        videoCaller.current = null;
        videoSelf.current = null;
        setVideoStatus(VideoState.NULL);
        navigator.mediaDevices.getUserMedia().then((a) => {
          a.getAudioTracks().forEach((track) => track.stop());
          a.getVideoTracks().forEach((track) => track.stop());
        });
      }
    };
  }, [simplePeer]);

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
        console.log(devices, "devices");
        devices.forEach(function (device) {
          if (device.kind === "videoinput") hasVideo = true;
          if (device.kind === "audioinput") hasAudio = true;
        });
      })
      .finally(() => {
        navigator.mediaDevices
          .getUserMedia({ video: hasVideo, audio: hasAudio })
          .then((mediaStream) => {
            mediaStream2 = mediaStream;

            let sp = new SimplePeer({
              trickle: false,
              initiator: isInitiator,
              stream: mediaStream2,
            });

            if (isInitiator) setVideoStatus(VideoState.CALLING);
            else {
              offer && sp.signal(offer);
            }

            try {
              const video = videoSelf.current;
              video!.srcObject = mediaStream2;
              video!.play();
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
            sp.on("connect", () => {
              setVideoStatus(VideoState.INCALL);
            });
            sp.on("stream", (stream: any) => {
              setVideoStatus(VideoState.INCALL);

              try {
                const video = videoCaller.current;
                video!.srcObject = stream;
                video!.play();
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
    webSocketConnection.send(pay);

    videoSelf.current = null;
    videoCaller.current = null;

    setVideoStatus(VideoState.NULL);

    mediaStream2?.getTracks().forEach((track) => track.stop());
    simplePeer?.destroy(new Error("awd"));
  };

  return (
    <VideoChatContext.Provider
      value={{ sendOrAcceptInvitation, setVideoChatId }}
    >
      {videoStatus !== VideoState.NULL ? (
        <div className=" w-screen h-screen relative top-0 left-0 bg-gray-700">
          {videoStatus === VideoState.CALLING && (
            <div className="text-white text-center absolute pt-44   h-full w-full text-2xl">
              Calling {guest ? guest[0]?.user?.fullname : ""}
            </div>
          )}
          {videoStatus === VideoState.CALLED && (
            <div className="text-white text-center absolute pt-44  h-full w-full text-2xl">
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
              {!guestPic ? (
                <video
                  className="w-full h-full object-cover"
                  ref={videoCaller}
                  autoPlay
                />
              ) : (
                <div className=" w-full h-full flex justify-center items-center ">
                  <div className="w-56 h-56 rounded-full bg-green-600 flex items-center justify-center text-white text-6xl">
                    {guestAcronym}
                  </div>
                </div>
              )}
            </>
          )}
          <div className=" w-32 h-32 absolute top-5 right-5 ">
            <video autoPlay ref={videoSelf} />
          </div>
          <div className="absolute left-0 bottom-20 w-full flex justify-center items-center  ">
            {videoStatus === VideoState.CALLED && (
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-400 mx-7">
                <CallIcon
                  sx={{ color: "white" }}
                  onClick={() => sendOrAcceptInvitation(false, offerSignal)}
                />
              </div>
            )}
            {(videoStatus === VideoState.INCALL ||
              videoStatus === VideoState.CALLED ||
              videoStatus === VideoState.CALLING) && (
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-red-400 mx-7">
                <CallEndIcon sx={{ color: "white" }} onClick={endCall} />
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
