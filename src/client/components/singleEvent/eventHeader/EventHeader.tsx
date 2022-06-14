import { FavoriteButton } from "./FavoriteButton";
import { ShareButton } from "../../ui/ShareButton";

interface EventHeaderProps {
  eventName?: string;
  url?: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({ eventName, url }) => {
  return (
    <>
      <div className="flex justify-between text-2xl">
        <h1>{eventName}</h1>
        <div className="flex">
          <ShareButton url={url} />
          <FavoriteButton />
        </div>
      </div>
    </>
  );
};
