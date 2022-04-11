import { ShareIcon, HeartIcon } from "@heroicons/react/solid";

interface SlideCardProps {
  videoTitle: string;
  videoUrl: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ videoUrl, videoTitle }) => {
  return (
    <div
      className="snap-center w-[230px] h-[88px] overflow-hidden bg-[#C20639] rounded-md flex-none relative p-2"
    >
      <div className="absolute left-0 w-full top-0 to-transparent text-white px-3 pb-8 pt-3 flex justify-between items-center">
        <small className="font-bold">{videoTitle}</small>

      </div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM7.5 14.5L14.5 10L7.5 5.5V14.5Z" fill="white"/>
      </svg>

    </div>
  );
};

export default SlideCard;
