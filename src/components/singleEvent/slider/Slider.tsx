import React from "react";

interface SliderProps {
  imgUrl?: any;
}

export const Slider: React.FC<SliderProps> = ({ imgUrl }) => {
  return (
    <>
      <img src={`http://localhost:8061/api/media/${imgUrl}`} alt="" />
    </>
  );
};
