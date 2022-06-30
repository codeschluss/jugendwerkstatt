import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../config/app";
import { MediaEntity } from "../../../../GraphQl/graphql";

interface TextProps {
  content?: string | null;
  name?: string | null;
  me: boolean;
  media?: MediaEntity | undefined | null;
}

const ChatText: React.FC<TextProps> = ({ content, name, me, media }) => {
  console.log(media, "media");
  const [mediaContent, setMediaContent] = useState<any>();

  useEffect(() => {
    if (media?.mimeType?.includes("image")) {
      setMediaContent(
        <img src={`${API_URL}media/${media.id}`} className="w-full" />
      );
    } else if (media?.mimeType?.includes("pdf")) {
      setMediaContent(<img src="/assets/pdf.png" className="w-full" />);
    } else if (media?.mimeType?.includes("video")) {
      setMediaContent(<img src="/assets/video.jpg" className="w-full" />);
    } else if (
      media?.mimeType?.includes("docx") ||
      media?.mimeType?.includes("/vnd")
    ) {
      setMediaContent(<img src="/assets/docx.png" className="w-full" />);
    } else {
      setMediaContent(<img src="/assets/file.png" className="w-full" />);
    }
  }, [media]);

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
        {media && (
          <div className="w-32  border-2 border-gray-200">{mediaContent}</div>
        )}
      </span>
    </div>
  );
};

export default ChatText;
