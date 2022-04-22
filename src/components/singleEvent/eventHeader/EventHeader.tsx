import { ShareIcon, HeartIcon } from "@heroicons/react/outline";
import I from "../../ui/IconWrapper";

export const EventHeader = () => {
  return (
    <>
      <div className="flex justify-between text-2xl">
        <h1>Eventname</h1>
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
