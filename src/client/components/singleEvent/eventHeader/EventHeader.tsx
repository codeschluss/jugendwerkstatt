import { HeartIcon as OutlineHeart } from "@heroicons/react/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/solid";
import { SocialMedia } from "../../ui/SocialMedia";

interface EventHeaderProps {
  eventName?: string;
  url?: string;
  setFavorite?: () => void;
  isFavorite?: boolean;
  removeFavorite?: () => void;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  eventName,
  url,
  setFavorite,
  isFavorite,
  removeFavorite,
}) => {
  return (
    <>
      <div className="flex justify-between text-2xl">
        <h1>{eventName}</h1>
        <div className="flex items-center justify-around md:w-20">
          <SocialMedia url={url} />|
          {isFavorite ? (
            <SolidHeart className="w-5" onClick={removeFavorite} />
          ) : (
            <OutlineHeart className="w-5" onClick={setFavorite} />
          )}
        </div>
      </div>
    </>
  );
};
