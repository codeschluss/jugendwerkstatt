import { MenuIcon } from "@heroicons/react/solid";
import I from "../../ui/IconWrapper";
import { FC, useContext } from "react";
import SideBox from "./SideBox";
import SideBarContext from "../../../../contexts/SideBarContext";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const SideBar: FC = () => {
  const navigate = useNavigate();
  const { sideBar, setSideBar } = useContext(SideBarContext);
  return (
    <>
      <div className=" flex justify-around items-center  -ml-3 mr-2 text-white w-28">
        <ChevronLeftIcon
          onClick={() => navigate(-1)}
          className="w-5 h-5 md:hidden"
        />
      </div>
      <SideBox hide={() => setSideBar(false)} active={sideBar} />
    </>
  );
};

export default SideBar;
