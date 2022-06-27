import { LockOpenIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../client/components/ui/Button";
import logo from "../../images/jugendwerkstatt-logo.png";

const PendingApproval: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 z-20 flex flex-col w-screen h-full ">
      <div className="px-0 h-[30%]">
        <img className="object-cover w-screen h-full" src={logo} alt={"logo"} />
      </div>
      <div className="flex flex-col items-center justify-around h-1/4">
        <LockOpenIcon className="w-24 h-24 text-[#04915C]" />
        <div className="flex flex-col row-span-6 mx-2 -mt-10 text-xs text-center text-gray-500 px- ">
          You are not yet approved, please wait some more days, weeks, years or
          something
        </div>
      </div>

      <Button click={() => navigate("/")} isValidated={true} isDisabled={true}>
        Zur App
      </Button>
    </div>
  );
};

export default PendingApproval;
