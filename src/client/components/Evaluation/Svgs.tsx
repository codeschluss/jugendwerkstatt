import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Svgs: React.FC = () => {
  return (
    <div className=" flex my-0.5">
      <div className="text-xs w-36 bg-transparent h-16 ml-1 flex justify-center items-center p-1">
        {" "}
        <p>{""}</p>
      </div>
      <div className="bg-white w-12  h-16 flex justify-center items-center flex-col ml-0.5">
        <p className="text-xs text-center">Stimmt genau</p>
        <TagFacesIcon />
      </div>
      <div className="bg-white w-12  h-16 flex justify-center items-center flex-col ml-0.5">
        <p className="text-xs text-center">Stimmt fast</p>
        <SentimentSatisfiedAltIcon />
      </div>
      <div className="bg-white w-12  h-16 flex justify-center items-center flex-col ml-0.5">
        <p className="text-xs text-center">Stimmt etwas</p>
        <SentimentDissatisfiedIcon />
      </div>
      <div className="bg-white w-12 h-16 flex justify-center items-center flex-col ml-0.5">
        <p className="text-xs text-center">Stimmt garnicht</p>
        <SentimentVeryDissatisfiedIcon />
      </div>
    </div>
  );
};

export default Svgs;
