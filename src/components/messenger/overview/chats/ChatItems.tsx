import React from "react";

interface ChatItemProps {
  name: string;
  status?: string;
  time: string;
}

const ChatItems: React.FC<ChatItemProps> = ({ name, status, time }) => {
  return (
    <div className="flex flex-row w-full my-3">
      <img src="/assets/avatarSmall2.png" className="w-10 h-10" alt="" />
      <div
        className="flex flex-row border-b-2 w-full
       border-[#676767] justify-between ml-3 pb-1 "
      >
        <div className="flex flex-col w-full ">
          <span className="flex w-full justify-between items-center">
            <p className="text-base">{name}</p>
            <p
              className="text-xs text-center

            text-[#676767]"
            >
              {time}
            </p>
          </span>
          <p className="text-xs">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItems;
