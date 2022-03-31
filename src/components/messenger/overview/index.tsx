import React, { useState } from "react";
import Calls from "./calls";
import Chats from "./chats";

const ChatOverview = () => {
  const [chatOrCall, setChatOrCall] = useState(true);

  return (
    <div className="w-full h-full px-8 mt-10">
      <div className="text-2xl flex justify-around text-[#676767] mb-10 ">
        <p
          className={` border-[#676767] px-4
          ${chatOrCall && "border-b-2"}
        `}
          onClick={() => setChatOrCall(true)}
        >
          Chats
        </p>
        <p
          className={` border-[#676767] px-4
        ${!chatOrCall && "border-b-2"}
      `}
          onClick={() => setChatOrCall(false)}
        >
          Anrufe
        </p>
      </div>
      {chatOrCall ? <Chats /> : <Calls />}
    </div>
  );
};

export default ChatOverview;
