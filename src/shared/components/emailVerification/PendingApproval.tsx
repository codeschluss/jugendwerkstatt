import { LockOpenIcon } from "@heroicons/react/outline";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../client/components/ui/Button";
import AuthContext from "../../../contexts/AuthContext";
import logo from "../../images/jugendwerkstatt-logo.png";

const PendingApproval: React.FC = () => {
  const { tempEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className=" flex flex-col w-screen h-full absolute top-0 z-20">
      <div className="px-0 h-[30%]">
        <img className="h-full w-screen object-cover" src={logo} alt={"logo"} />
      </div>
      <div className="flex  flex-col justify-around items-center h-1/4">
        <LockOpenIcon className="w-24 h-24 text-[#04915C]" />
        <div className="text-gray-500 row-span-6 text-center mx-2 text-xs px- -mt-10 flex flex-col ">
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
