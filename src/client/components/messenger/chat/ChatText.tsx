import React from "react";

interface TextProps {
  content: string;
  sender: string;
  single?: string;
  group?: boolean;
}

const ChatText: React.FC<TextProps> = ({ content, sender, single, group }) => {
  return (
    <div
      className={`w-full flex px-6
    ${sender === "1" ? "justify-end" : "justify-start"}
    `}
    >
      <span
        className={`p-2 max-w-[70%] my-1 rounded-md text-gray-800 text-sm
      
  ${sender === "1" ? "bg-[#D5FFC0]  " : "bg-white  "}
  `}
      >
        {group && sender !== "1" ? (
          <p className="text-green-600 text-base">Max Mueller</p>
        ) : null}

        <p>{content}</p>
      </span>
    </div>
  );
};

export default ChatText;
