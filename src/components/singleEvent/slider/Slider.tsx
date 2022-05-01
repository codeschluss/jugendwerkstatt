import React from "react";

interface SliderProps {
  imgUrl?: any;
  colorBg?: any;
}

export const Slider: React.FC<SliderProps> = ({ imgUrl, colorBg }) => {
  return (
    <>
      {imgUrl && (
        <img src={`http://localhost:8061/api/media/${imgUrl}`} alt="" />
      )}
      {colorBg && (
        <div className="w-full h-60 bg-red-400 flex justify-center items-center text-2xl">
          {colorBg}
        </div>
      )}
    </>
  );
};
