import { createContext, useEffect, useRef, useState } from "react";
import SimplePeer, { Instance, SignalData } from "simple-peer";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { WS_URL } from "../../../config/app";
import { readAuthToken } from "../../../shared/utils";
import { Stream } from "@mui/icons-material";

export enum VideoState {
  NULL,
  INCALL,
  CALLING,
  CALLED,
}

interface VideoProps {
  state?: VideoState;
  myVideo?: any;
  otherVideo?: any;
}

export const Video: React.FunctionComponent = ({ children }) => {
  const [video, setVideo] = useState<boolean>(false);
  const [guestId, setGuestId] = useState<string | undefined | null>();
  const [videoStatus, setVideoStatus] = useState<VideoState>(VideoState.NULL);
  const [stream, setStream] = useState<MediaStream>();
  const accessToken = readAuthToken("accessToken") || "";
  const [offerSignal, setOfferSignal] = useState<SignalData>();
  const [simplePeer, setSimplePeer] = useState<Instance>();
  const videoSelf = useRef<HTMLVideoElement | null>(null);
  const videoCaller = useRef<HTMLVideoElement | null>(null);

  const webSocketConnection = new WebSocket(`${WS_URL}videochat`);

  useEffect(() => {
    webSocketConnection.onopen = (ad) => {
      console.log("inited", ad);
      webSocketConnection.send(
        JSON.stringify({
          chatId: "c5d93496-d5ee-4faf-a831-9912314a8a6a",
          token: accessToken,
          type: "init",
        })
      );
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
          videoSelf.current!.srcObject = stream;
        });
    };
  }, []);

  useEffect(() => {
    webSocketConnection.onmessage = (message: any) => {
      const payload = JSON.parse(message.data);
      console.log(payload);
      if (payload?.type === "offer") {
        setOfferSignal(payload);
        setVideoStatus(VideoState.CALLED);
      }
    };
  }, [simplePeer]);

  const sendCall = () => {
    const peer = new SimplePeer({
      trickle: false,
      initiator: true,
      stream: stream,
    });

    peer.on("signal", (data) => {
      console.log(
        "signaling1",
        Object.assign(data, {
          token: accessToken,
          chatId: "c5d93496-d5ee-4faf-a831-9912314a8a6a",
        })
      );

      webSocketConnection.send(
        JSON.stringify(
          Object.assign(data, {
            token: accessToken,
            chatId: "c5d93496-d5ee-4faf-a831-9912314a8a6a",
          })
        )
      );
    });

    peer.on("stream", (stream: any) => {
      const video = videoCaller.current;
      video!.srcObject = stream;
      video!.play();
    });
  };

  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  const acceptCall = () => {
    const peer = new SimplePeer({
      trickle: false,
      initiator: false,
      stream: stream,
    });

    offerSignal && peer.signal(offerSignal);

    peer.on("signal", (data) => {
      console.log("signaling2", data);
      webSocketConnection.send(
        JSON.stringify(
          Object.assign(data, {
            token: accessToken,
            chatId: "c5d93496-d5ee-4faf-a831-9912314a8a6a",
          })
        )
      );
    });

    peer.on("stream", (stream: any) => {
      const video = videoCaller.current;
      video!.srcObject = stream;
      video!.play();
    });
  };

  //   const sendOrAcceptInvitation = (isInitiator: boolean, offer?: SignalData) => {
  //     navigator.mediaDevices
  //       .getUserMedia({ video: true, audio: true })
  //       .then((mediaStream) => {
  //         console.log(videoSelf.current, "curretn");
  //         if (isInitiator) sendCall();
  //         const video = videoSelf.current;
  //         video!.srcObject = mediaStream;
  //         video!.play();

  //         const sp = new SimplePeer({
  //           trickle: false,
  //           initiator: isInitiator,
  //           stream: mediaStream,
  //         });

  //         if (isInitiator) setVideoStatus(VideoState.CALLING);
  //         else offer && sp.signal(offer);

  //         sp.on("signal", (data: any) => {
  //           console.log("signal", data);
  //           webSocketConnection.send(
  //             JSON.stringify(
  //               Object.assign(data, {
  //                 chatId: "c5d93496-d5ee-4faf-a831-9912314a8a6a",
  //                 token: accessToken,
  //               })
  //             )
  //           );
  //         });

  //         sp.on("connect", () => setVideoStatus(VideoState.INCALL));
  //         sp.on("stream", (stream: any) => {
  //           const video = videoCaller.current;
  //           video!.srcObject = stream;
  //           video!.play();
  //         });
  //         setSimplePeer(sp);
  //       })
  //       .catch((err) => console.log(err, "error"));
  //   };

  return (
    <>
      <div className=" w-screen h-screen relative top-0 left-0">
        <video
          muted
          className="w-full h-full object-cover"
          ref={videoCaller}
          playsInline
        />
        <div className=" w-32 h-32 absolute top-5 right-5 ">
          <video muted autoPlay ref={videoSelf} playsInline />
        </div>

        <div className="absolute left-0 bottom-20 w-full flex justify-center items-center  ">
          {(videoStatus === VideoState.NULL ||
            videoStatus === VideoState.CALLED) && (
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-400 mx-7">
              <CallIcon sx={{ color: "white" }} onClick={sendCall} />
            </div>
          )}
          {(videoStatus === VideoState.INCALL ||
            videoStatus === VideoState.CALLED) && (
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-red-400 mx-7">
              <CallEndIcon sx={{ color: "white" }} onClick={acceptCall} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Video;
