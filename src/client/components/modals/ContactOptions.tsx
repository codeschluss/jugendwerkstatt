import React, { FunctionComponent, useContext } from "react";
import {
  PhoneIcon,
  ChatAltIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import Avatar from "../../../shared/components/header/sideBar/Avatar";
import VideoContext from "../../../contexts/VideoContext";

interface ModalProps {
  visible: boolean;
  guestName: string;
  guestNr: string;
  guestEmail: string;
  clicked?: any;
  imgSrc: any;
  openChat?: any;
}

const ContactOptions: FunctionComponent<ModalProps> = ({
  visible,
  guestNr,
  guestName,
  guestEmail,
  clicked,
  imgSrc,
  openChat,
}) => {
  const { testcall } = useContext(VideoContext);

  return (
    <div
      onClick={clicked}
      className={`${visible ? "inline-block" : "hidden"}
    absolute bg-white/30 w-screen h-screen z-50 flex justify-center shadow-md `}
    >
      <div className=" w-72 md:w-96 h-80 bg-red-100 flex flex-col justify-start py-10 items-center text-gray-600 rounded-2xl">
        {imgSrc ? (
          <img
            className="w-14 h-14 rounded-full object-cover "
            src={imgSrc}
            alt=""
          />
        ) : (
          <Avatar fullname={guestName} />
        )}
        <div className="my-8">
          <p className="text-center">{guestName}</p>
          <p className="text-sm text-center">{guestNr}</p>
          <p className="text-sm text-center">{guestEmail}</p>
        </div>
        <div className="flex justify-around w-3/5 ">
          <PhoneIcon className="w-7" onClick={() => testcall("1234567")} />
          <ChatAltIcon className="w-7" onClick={openChat} />
          <VideoCameraIcon
            className="w-7"
            onClick={() => alert("video call")}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
