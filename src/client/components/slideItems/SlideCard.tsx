import { HeartIcon as SolidHeart, ShareIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import {
  AddressEntity,
  EventEntity,
  useAddEventFavoriteMutation,
  useAddJobAdFavoriteMutation,
  useGetMeFavoritesQuery,
} from "../../../GraphQl/graphql";
import { API_URL } from "../../../config/app";
import { SocialMedia } from "../ui/SocialMedia";
import { readAuthToken } from "../../../shared/utils";
import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
export interface SlideCardProps {
  className?: string;
  imgUrl?: any;
  eventName?: EventEntity["name"];
  location?: AddressEntity["place"];
  date?: any;
  route?: any;
  width?: string;
  color?: string | undefined | null;
  gradient?: boolean;
  setFavorite?: any;
  removeFavorite?: any;
  isFavorite?: boolean;
  shareUrl?: string;
}

const SlideCard: React.FC<SlideCardProps> = ({
  className,
  location,
  eventName,
  date,
  gradient = true,
  imgUrl,
  route,
  color,
  isFavorite,
  width = " w-80 md:w-full",
  setFavorite,
  removeFavorite,
  shareUrl,
}) => {
  const theDate = new Date(date);
  const year = theDate.getFullYear();
  const month = theDate.getMonth();
  const day = theDate.getDate();
  const [img, setImg] = useState<any>();

  const token = readAuthToken("accessToken");

  const weekDays = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  const weekDay = weekDays[theDate.getDay()];

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
    if (imgUrl) {
      fetchImage();
    }
  }, [token, imgUrl]);

  return (
    <div className={`${className} snap-center ${width} h-60   flex-none px-2`}>
      <div className="relative  h-full overflow-hidden rounded-md">
        <Link to={route}>
          {imgUrl ? (
            <img
              src={img}
              alt={eventName || ""}
              className="object-cover w-full h-full absolute inset-0"
            />
          ) : (
            <div
              style={{ background: `${color}` }}
              className="object-cover w-full h-full absolute inset-0"
            >
              {" "}
            </div>
          )}
        </Link>
        <div
          className={`absolute left-0 w-full top-0 ${
            gradient ? "bg-gradient-to-b from-black to-transparent" : ""
          }  text-white px-3 pb-8 pt-3 flex justify-between items-center`}
        >
          <small className="font-bold">{eventName}</small>
          {(location || date) && (
            <div className="flex items-center w-14 md:w-20 justify-between">
              <SocialMedia url={shareUrl} /> |
              {isFavorite ? (
                <SolidHeart
                  className="w-5 cursor-pointer"
                  onClick={removeFavorite}
                />
              ) : (
                <OutlineHeart
                  className="w-5 cursor-pointer"
                  onClick={setFavorite}
                />
              )}
            </div>
          )}
        </div>
        <Link to={route}>
          {" "}
          <div
            className={`absolute left-0 w-full bottom-0 ${
              gradient ? "bg-gradient-to-t from-black to-transparent" : ""
            }  text-white px-3 pb-3 pt-9`}
          >
            {location && (
              <p className="border-b border-white pb-1 mb-1 font-bold">
                {location}
              </p>
            )}
            {date && (
              <p>
                {color && "Bewerbungsfrist:"}{" "}
                {`${weekDay}, ${day}.${month}.${year}`}
              </p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SlideCard;
