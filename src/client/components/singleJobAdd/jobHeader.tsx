import { ShareButton } from "../ui/ShareButton";
import { HeartIcon as OutlineHeart } from "@heroicons/react/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/solid";

interface EventHeaderProps {
  eventName?: string;
  url?: string;
  isFavorite?: boolean;
  setFavorite?: () => void;
}

export const JobHeader: React.FC<EventHeaderProps> = ({
  eventName,
  url,
  isFavorite,
  setFavorite,
}) => {
  return (
    <>
      <div className="flex justify-between text-2xl">
        <h1>{eventName}</h1>
        <div className="flex">
          <ShareButton url={url} />
          {isFavorite ? (
            <SolidHeart className="w-5" />
          ) : (
            <OutlineHeart className="w-5" onClick={setFavorite} />
          )}
        </div>
      </div>
    </>
  );
};
