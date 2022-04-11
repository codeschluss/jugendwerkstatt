import { ShareIcon, HeartIcon } from "@heroicons/react/solid";

interface SlideCardProps {
  className?: string;
  imgUrl: string;
  topicName: string;
  location: string;
  date: string;
}

const SlideCard: React.FC<SlideCardProps> = ({
  className,
  location,
  topicName: topicName,
  date,
  imgUrl,
}) => {
  return (
    <div
      className={`${className} snap-center w-9/12 h-60 overflow-hidden rounded-md flex-none relative p-2`}
    >
      <img
        alt={topicName}
        className="object-cover w-full h-full absolute inset-0"
        src={imgUrl}
      />
      <div className="absolute left-0 w-full top-0 bg-gradient-to-b from-black to-transparent text-white px-3 pb-8 pt-3 flex justify-between items-center">
        <small className="font-bold">{topicName}</small>
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
