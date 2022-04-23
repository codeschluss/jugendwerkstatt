import React from "react";
import { RegisterFooter } from "../register/registerfooter/RegisterFooter";
import {
  CheckIcon,
  ExclamationCircleIcon,
  InboxInIcon,
} from "@heroicons/react/outline";
import { useSendVerificationMutation } from "../../GraphQl/graphql";

interface AuthWrapperProps {
  title: string;
  headerType?: string;
  headerContent?: string;
  resendLink?: any;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  title,
  children,
  headerType,
  headerContent,
  resendLink,
}) => {
  let authHeaderIcon;

  switch (headerType) {
    case "success":
      authHeaderIcon = (
        <>
          <div className="border-[1px] border-gray-600 rounded-lg w-14 h-14 text-green-600">
            <CheckIcon />
          </div>
          <p className="text-lg font-semibold">Gluckwunsch</p>
        </>
      );
      break;
    case "wrong":
      authHeaderIcon = (
        <>
          <div className="border-[1px] border-gray-600 rounded-lg w-14 h-14 text-red-600">
            <ExclamationCircleIcon />
          </div>
          <p className="text-lg font-semibold">Falsche Zugangsdaten</p>
        </>
      );
      break;
    case "email":
      authHeaderIcon = (
        <>
          <div className="border-[1px] border-gray-600 rounded-lg w-14 h-14 text-green-600">
            <InboxInIcon />
          </div>
          <p className="text-lg font-semibold">Uberprufe deine E-Mail</p>
        </>
      );
      break;
    default:
      <span></span>;
  }

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 relative h-100 flex justify-center items-center ">
        <img
          className="h-full w-screen object-cover"
          src="/assets/background.png"
          alt={"logo"}
        />
        {headerType && (
          <div
            className="w-[80%]  h-[80%] bg white absolute z-10
     bg-white rounded-md top-4 flex justify-center
      items-center  flex-col text-center p-3"
          >
            {authHeaderIcon}
            <p className="text-sm">{headerContent}</p>
            {resendLink && (
              <p onClick={resendLink} className="text-sm underline font-medium">
                Link nochmal senden
              </p>
            )}
          </div>
        )}
      </div>
      <div className=" w-full relative -mt-6 rounded-3xl bg-white">
        <h4 className="text-3xl text-center mt-5">{title}</h4>
        {children}
        <RegisterFooter />
      </div>
    </div>
  );
};

export default AuthWrapper;
