import { HeartIcon, ShareIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { AddressEntity, EventEntity } from "../../GraphQl/graphql";
import { API_URL } from "../../config/app";
=======
import { API_URL } from "../../config/app";
import { AddressEntity, EventEntity } from "../../GraphQl/graphql";
>>>>>>> e0fa27512e4a86302cb5a3886b07310210de65be

interface SlideCardProps {
  className?: string;
  imgUrl?: any;
  eventName: EventEntity["name"];
  location: AddressEntity["place"];
  date: any;
  route: any;
  width?: string;
  color?: string | undefined | null;
}

const SlideCard: React.FC<SlideCardProps> = ({
  className,
  location,
  eventName,
  date,
  imgUrl,
  route,
  color,
  width = "w-9/12",
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
    <div
      className={`${className} snap-center ${width} h-60 overflow-hidden rounded-md flex-none relative m-2 p-2`}
    >
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
      <div className="absolute left-0 w-full top-0 bg-gradient-to-b from-black to-transparent text-white px-3 pb-8 pt-3 flex justify-between items-center">
        <small className="font-bold">{eventName}</small>
        <div className="flex items-center">
          <ShareIcon className="w-4 h-4 mr-2" />
          <HeartIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="absolute left-0 w-full bottom-0 bg-gradient-to-t from-black to-transparent text-white px-3 pb-3 pt-9">
        <p className="border-b border-white pb-1 mb-1 font-bold">{location}</p>
        <p>{`${weekDay}, ${day}.${month}.${year}`}</p>
      </div>
    </div>
  );
};

export default SlideCard;
