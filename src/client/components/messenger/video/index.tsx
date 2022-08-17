import React from "react";
import CallIcon from "@mui/icons-material/Call";
import CallEndIcon from "@mui/icons-material/CallEnd";

export enum VideoState {
  NULL,
  INCALL,
  CALLING,
  CALLED,
}

interface VideoProps {
  state?: VideoState;
}

const VideoCall: React.FC<VideoProps> = ({ state }) => {
  return (
    <div className=" w-screen h-screen relative top-0 left-0">
      <img
        className="w-full h-full object-cover"
        src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        alt=""
      />
      <div className=" w-32 h-32 absolute top-5 right-5 ">
        <img
          src="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg?quality=85&w=800"
          alt=""
        />
      </div>

      <div className="absolute left-0 bottom-20 w-full flex justify-center items-center  ">
        {state === VideoState.CALLED && (
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-400 mx-7">
            <CallIcon sx={{ color: "white" }} />
          </div>
        )}
        {(state === VideoState.INCALL || state === VideoState.CALLED) && (
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-red-400 mx-7">
            <CallEndIcon sx={{ color: "white" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCall;
