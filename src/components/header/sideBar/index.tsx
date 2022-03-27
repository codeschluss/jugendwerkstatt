import { MenuIcon } from "@heroicons/react/solid";
import I from "../../ui/IconWrapper";
import { useState } from "react";
import SideBox from "./SideBox";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  return (
    <>
      <I className="text-white -ml-3" onClick={() => setSideBar(true)}>
        <MenuIcon className="h-5 w-5" />
      </I>
      <SideBox hide={() => setSideBar(false)} active={sideBar} />
    </>
  );
};

export default SideBar;
