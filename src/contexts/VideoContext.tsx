import { createContext, useEffect, useState } from "react";
import VideoCall, { VideoState } from "../client/components/messenger/video";
import detectDevice from "../shared/utils/isTouch";

export const VideoContext = createContext<{
  video: boolean;
  setVideo: (e: boolean) => void;
  testcall: any;
}>({
  video: false,
  setVideo: () => false,
  testcall: "",
});

export const VideoProvider: React.FunctionComponent = ({ children }) => {
  const [video, setVideo] = useState<boolean>(false);
  const [guestId, setGuestId] = useState<string | undefined | null>();
  const [videoStatus, setVideoStatus] = useState<VideoState>(VideoState.NULL);

  useEffect(() => {
    //Here we check whether on init the user has a call? if yes setvideo to true and some other simple peer stuf
  }, []);

  const testcall = (exampleID: string | undefined | null) => {
    alert(`calling ${exampleID}`);
    setVideo(true);
    setVideoStatus(VideoState.INCALL);
    setGuestId(exampleID);
    //here we do the whole calling, in call and that other logic i think
  };

  //Video call component will have some video props  on which the Reference points to as src

  return (
    <VideoContext.Provider value={{ video, setVideo, testcall }}>
      {video ? <VideoCall state={videoStatus} /> : children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
