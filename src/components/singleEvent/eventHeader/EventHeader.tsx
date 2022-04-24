import { ShareIcon, HeartIcon } from "@heroicons/react/outline";
import I from "../../ui/IconWrapper";

interface EventHeaderProps {
  eventName?: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({ eventName }) => {
  return (
    <>
      <div className="flex justify-between text-2xl">
        <h1>{eventName}</h1>
        <div className="flex">
          <I>
            <ShareIcon />
          </I>
          <I>
            <HeartIcon />
          </I>
        </div>
      </div>
    </>
  );
};
