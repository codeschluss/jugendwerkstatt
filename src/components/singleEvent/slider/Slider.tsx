import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import "./style.css";
interface SliderProps {
  imgUrl?: any;
  colorBg?: any;
}

export const Slider: React.FC<SliderProps> = ({ imgUrl, colorBg }) => {
  return (
    <>
      {imgUrl ? (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            {imgUrl && (
              <img src={`http://localhost:8061/api/media/${imgUrl}`} alt="" />
            )}
            {colorBg && (
              <div className="w-full h-60 bg-red-400 flex justify-center items-center text-2xl">
                {colorBg}
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      ) : (
        <div className="w-full h-96 flex justify-center items-center text-3xl font-semibold">
          Title
        </div>
      )}
    </>
  );
};
