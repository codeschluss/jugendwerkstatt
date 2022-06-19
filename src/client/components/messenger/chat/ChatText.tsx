import React from "react";

interface TextProps {
  content?: string | null;
  name?: string | null;
  me: boolean;
}

const ChatText: React.FC<TextProps> = ({ content, name, me }) => {
  console.log(me);
  return (
    <div
      className={`w-full flex px-6  ${me ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`p-2 max-w-[70%] my-1 rounded-md text-gray-800 text-sm 
        ${me ? "bg-green-300" : "bg-white"}`}
      >
        {name && <p className=" text-base">{name}</p>}
        <p>{content}</p>
      </span>
    </div>
  );
};

export default ChatText;
