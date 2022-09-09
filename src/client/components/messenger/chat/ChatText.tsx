import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";
import { ChevronDownIcon, ReplyIcon } from "@heroicons/react/outline";
import { Done, DoneAll } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { MediaEntity } from "../../../../GraphQl/graphql";
import DropDown from "../../../../shared/components/ui/DropDown";
import { readAuthToken } from "../../../../shared/utils";

interface TextProps {
  content?: string | null;
  name?: string | null;
  me: boolean;
  media?: MediaEntity | undefined | null;
  seen?: boolean;
  myMsg?: boolean;
  reply?: any;
  unsend?: any;
  parent?: any;
}

const ChatText: React.FC<TextProps> = ({
  content,
  name,
  me,
  media,
  seen,
  myMsg,
  reply,
  unsend,
  parent,
}) => {
  const [mediaContent, setMediaContent] = useState<any>();
  const token = readAuthToken("accessToken");
  const device = Capacitor.getPlatform(); // -> 'web', 'ios' or 'android'
  useEffect(() => {
    if (media?.mimeType?.includes("image")) {
      setMediaContent(
        <img
          src={`data:${media?.mimeType};base64,${media?.base64}`}
          className="w-full"
        />
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

  const downloadTemplateDocx = async (
    mediaId: any,
    mediaName: any,
    mediaMimeType: any
  ) => {
    const requestOptions = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    if (device === "web") {
      await fetch(
        process.env.REACT_APP_API_URL + `media/download/${mediaId}`,
        requestOptions
      )
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = `${mediaName}.${mediaMimeType}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          alert("your file has downloaded!");
        })

        .catch((e) => console.log(e));
    } else if (device === "ios" || device === "android") {
      const openCapacitorSite = async () => {
        await Browser.open({
          url: `${process.env.REACT_APP_BASE_URL}downloadfile/${
            process.env.REACT_APP_API_URL + `media/download/${mediaId}`
          }/${token}/${mediaMimeType}`,
        });
      };
      openCapacitorSite();
    }
  };

  return (
    <div
      className={`w-full flex px-6  ${me ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`p-2 max-w-[70%] my-1 rounded-md  text-sm
        ${me ? "bg-[#D5FFC0] text-black" : "bg-white text-black"} shadow`}
      >
        <DropDown
          position={me ? "right" : "left"}
          className="float-right mt-auto"
          boxClassName="w-20 mt-3 py-2.5 px-1"
          name={<ChevronDownIcon className="w-3" />}
          withArrow={false}
        >
          <div>
            {me ? (
              <>
                <p onClick={unsend} className="cursor-pointer text-center">
                  löschen
                </p>
                <p onClick={reply} className="cursor-pointer text-center">
                  antworten
                </p>
              </>
            ) : (
              <p onClick={reply} className="cursor-pointer text-center">
                antworten
              </p>
            )}
          </div>
        </DropDown>
        {name && <p className=" text-xs text-green-800">{name}</p>}
        {parent && (
          <div className="flex">
            <ReplyIcon className="w-3 mr-1" />
            <p className="bg-gray-100 p-1 text-gray-500">
              {parent?.content
                ? parent.content
                : "file: " + parent?.media?.name}
            </p>
          </div>
        )}

        {content && <p>{content}</p>}
        {media && (
          <>
            <div
              onClick={() =>
                downloadTemplateDocx(
                  media.id,
                  media?.name,
                  media?.mimeType?.split("/")[1]
                )
              }
              className="w-32  border-2 border-gray-200"
            >
              {mediaContent}
            </div>
            <p>{media.name}</p>
          </>
        )}
        <div className="flex justify-end">
          {myMsg &&
            (seen ? (
              <DoneAll style={{ fontSize: 15 }} />
            ) : (
              <Done style={{ fontSize: 15 }} />
            ))}
        </div>
      </span>
    </div>
  );
};

export default ChatText;
