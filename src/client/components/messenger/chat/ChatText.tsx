import React from "react";

interface TextProps {
  content: string;
  sender: string;
}

const ChatText: React.FC<TextProps> = ({ content, sender }) => {
  return (
    <div
      className={`w-full flex px-6
    ${sender === "1" ? "justify-end" : "justify-start"}
    `}
    >
      <p
        className={`py-1 px-1 max-w-[70%] my-1 rounded-md
      text-white
  ${sender === "1" ? "bg-[#3B8873] " : "bg-[#9C4C5C] "}
  `}
      >
        {content}
      </p>
    </div>
  );
};

export default ChatText;
