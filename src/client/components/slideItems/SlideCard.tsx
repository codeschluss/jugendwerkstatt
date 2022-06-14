import { HeartIcon, ShareIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import {
  AddressEntity,
  EventEntity,
  useAddEventFavoriteMutation,
  useAddJobAdFavoriteMutation,
} from "../../../GraphQl/graphql";
import { API_URL } from "../../../config/app";
import { ShareButton } from "../ui/ShareButton";
export interface SlideCardProps {
  className?: string;
  imgUrl?: any;
  eventName: EventEntity["name"];
  location: AddressEntity["place"];
  date: any;
  route: any;
  width?: string;
  color?: string | undefined | null;
  gradient?: boolean;
  setFavorite?: () => void;
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
  width = "w-9/12 md:w-full",
  setFavorite,
}) => {
  const theDate = new Date(date);
  const year = theDate.getFullYear();
  const month = theDate.getMonth();
  const day = theDate.getDate();

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

  return (
    <div className={`${className} snap-center ${width} h-60 flex-none md:px-2`}>
      <div className="relative h-full overflow-hidden rounded-md">
        <Link to={route}>
          {imgUrl ? (
            <img
              alt={eventName || ""}
              className="object-cover w-full h-full absolute inset-0"
              src={`${API_URL}media/${imgUrl}`}
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
          <div className="flex items-center">
            <ShareButton url="#" />
            <HeartIcon className="w-4 h-4" onClick={setFavorite} />
          </div>
        </div>
        <div
          className={`absolute left-0 w-full bottom-0 ${
            gradient ? "bg-gradient-to-t from-black to-transparent" : ""
          }  text-white px-3 pb-3 pt-9`}
        >
          <p className="border-b border-white pb-1 mb-1 font-bold">
            {location}
          </p>
          <p>{`${weekDay}, ${day}.${month}.${year}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
