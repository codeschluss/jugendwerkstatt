import React from "react";
import { MediaEntity } from "../../../../GraphQl/graphql";

interface TextProps {
  content?: string | null;
  name?: string | null;
  me: boolean;
  media?: MediaEntity | undefined | null;
}

const ChatText: React.FC<TextProps> = ({ content, name, me, media }) => {
  console.log(media, "media");
  return (
    <div
      className={`w-full flex px-6  ${me ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`p-2 max-w-[70%] my-1 rounded-md  text-sm
        ${me ? "bg-[#D5FFC0] text-black" : "bg-white text-black"} shadow`}
      >
        {name && <p className=" text-xs text-green-800">{name}</p>}
        {content && <p>{content}</p>}
        {media && <div className="w-32 h-32 border-2 border-gray-200"></div>}
      </span>
    </div>
  );
};

export default ChatText;
