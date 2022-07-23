import React, { useEffect, useState } from "react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { API_URL } from "../../../../config/app";
import { readAuthToken } from "../../../../shared/utils";
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
  const token = readAuthToken("accessToken");
  const [img, setImg] = useState<any>();

  const requestOptions: any = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      responseType: "arraybuffer",
    },
  };
  const fetchImage = async () => {
    const res = await fetch(`${API_URL}media/${imgUrl}`, requestOptions);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    if (imgUrl && token) {
      fetchImage();
    }
  }, [token, imgUrl]);

  return (
    <div className="w-full  md:w-1/2 md:bg-white md:rounded-md md:p-5">
      {imgUrl && <img className="md:rounded-md" src={img} alt="" />}
      {colorBg && (
        <div
          className="w-full h-full flex justify-center items-center text-2xl"
          style={{ background: `${colorBg}` }}
        >
          {title}
        </div>
      )}
    </div>
  );
};
