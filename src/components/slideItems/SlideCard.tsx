import { HeartIcon, ShareIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { AddressEntity, EventEntity } from "../home/Test";

interface SlideCardProps {
  className?: string;
  imgUrl?: any;
  eventName: EventEntity["name"];
  location: AddressEntity["place"];
  date: string;
  route: any;
}

const SlideCard: React.FC<SlideCardProps> = ({
  className,
  location,
  eventName,
  date,
  imgUrl,
  route,
}) => {
  return (
    <div
      className={`${className} snap-center w-9/12 h-60 overflow-hidden rounded-md flex-none relative p-2`}
    >
      <Link to={route}>
        <img
          alt={eventName || ""}
          className="object-cover w-full h-full absolute inset-0"
          src={`http://localhost:8061/api/media/${imgUrl}`}
        />
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
        <p>{date}</p>
      </div>
    </div>
  );
};

export default SlideCard;
