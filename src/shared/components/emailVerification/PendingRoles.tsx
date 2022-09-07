import { LockOpenIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../client/components/ui/Button";
import { useAuth } from "../../../hooks/useAuth";
import logo from "../../images/jugendwerkstatt-logo.png";

const PendingRoles: React.FC = () => {
  const { handleLogout } = useAuth();

  return (
    <div className="absolute top-0 z-20 flex flex-col w-screen h-full ">
      <div className="px-0 h-[30%]">
        <img className="object-cover w-screen h-full" src={logo} alt={"logo"} />
      </div>
      <div className="flex flex-col items-center justify-around h-1/4">
        <LockOpenIcon className="w-24 h-24 text-[#04915C]" />
        <div className="flex flex-col row-span-6 mx-2 -mt-10 text-xs text-center text-gray-500 px- ">
          You are approved and no further action is needed anymore, ask your
          admin for further procedure
        </div>
      </div>

      <Button click={handleLogout} isValidated={true} isDisabled={true}>
        Zur App
      </Button>
    </div>
  );
};

export default PendingRoles;
