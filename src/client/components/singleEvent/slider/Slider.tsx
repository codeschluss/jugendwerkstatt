import React from "react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { API_URL } from "../../../../config/app";
import "./style.css";

// import "./style.css";
interface SliderProps {
  imgUrl?: any;
  colorBg?: string | undefined | null;
  title?: string | undefined | null;
}

export const TitleImgSlider: React.FC<SliderProps> = ({
  imgUrl,
  colorBg,
  title,
}) => {
  return (
    <div className="w-full md:w-1/2 md:bg-white md:rounded-md md:p-5">
      {imgUrl && (
        <img
          className="md:rounded-md"
          src={`${API_URL}media/${imgUrl}`}
          alt=""
        />
      )}
      {colorBg && (
        <div
          className="w-full h-60 flex justify-center items-center text-2xl"
          style={{ background: `${colorBg}` }}
        >
          {title}
        </div>
      )}
    </div>
  );
};
