import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import "./style.css";
interface SliderProps {
  imgUrl?: string | undefined | null;
  colorBg?: string | undefined | null;
  title?: string | undefined | null;
}

export const Slider: React.FC<SliderProps> = ({ imgUrl, colorBg, title }) => {
  return (
    <>
      {imgUrl && (
        <img src={`http://localhost:8061/api/media/${imgUrl}`} alt="" />
      )}
      {colorBg && (
        <div
          className="w-full h-60 flex justify-center items-center text-2xl"
          style={{ background: `${colorBg}` }}
        >
          {title}
        </div>
      )}
    </>
  );
};
