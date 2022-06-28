import React from "react";

interface TextProps {
  content?: string | null;
  name?: string | null;
  me: boolean;
  media?: any;
}

const ChatText: React.FC<TextProps> = ({ content, name, me, media }) => {
  return (
    <div
      className={`w-full flex px-6  ${me ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`p-2 max-w-[70%] my-1 rounded-md  text-sm
        ${me ? "bg-primary text-white" : "bg-white text-black"}`}
      >
        {name && <p className=" text-base">{name}</p>}
        {content && <p>{content}</p>}
        {media && <span>taratata</span>}
      </span>
    </div>
  );
};

export default ChatText;
