import React, { FunctionComponent } from "react";
import {
  PhoneIcon,
  ChatAltIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

interface ModalProps {
  visible: boolean;
  guestName: string;
  guestNr: string;
  guestEmail: string;
  clicked?: any;
}

const ContactOptions: FunctionComponent<ModalProps> = ({
  visible,
  guestNr,
  guestName,
  guestEmail,
  clicked,
}) => {
  return (
    <div
      onClick={clicked}
      className={`${visible ? "inline-block" : "hidden"}
    absolute backdrop-blur-sm bg-white/30 w-screen h-screen z-50 flex justify-center `}
    >
      <div className=" w-72 h-80 bg-red-100 flex flex-col justify-start py-10 items-center text-gray-600 rounded-2xl">
        <img className="w-14 h-14" src="/assets/avatarSmall2.png" alt="" />{" "}
        <div className="my-8">
          <p>{guestName}</p>
          <p className="text-sm">{guestNr}</p>
          <p className="text-sm">{guestEmail}</p>
        </div>
        <div className="flex justify-around w-3/5 ">
          <PhoneIcon className="w-7" onClick={() => alert("calling")} />
          <ChatAltIcon className="w-7" onClick={() => alert("chating")} />
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
