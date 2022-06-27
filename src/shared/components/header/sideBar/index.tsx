import { MenuIcon } from "@heroicons/react/solid";
import I from "../../ui/IconWrapper";
import { FC, useContext } from "react";
import SideBox from "./SideBox";
import SideBarContext from "../../../../contexts/SideBarContext";

const SideBar: FC = () => {
  const { sideBar, setSideBar } = useContext(SideBarContext);
  return (
    <>
      <I
        className="-ml-3 text-white md:text-black"
        onClick={() => setSideBar(!sideBar)}
      >
        <MenuIcon className="w-5 h-5 md:hidden" />
      </I>
      <SideBox hide={() => setSideBar(false)} active={sideBar} />
    </>
  );
};

export default SideBar;
