import { MenuIcon } from "@heroicons/react/solid";
import I from "../../ui/IconWrapper";
import { useContext } from "react";
import SideBox from "./SideBox";
import SideBarContext from "../../../../contexts/SideBarContext";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const { sideBar, setSideBar } = useContext(SideBarContext);
  return (
    <>
      <I
        className="text-white md:text-black -ml-3"
        onClick={() => setSideBar(!sideBar)}
      >
        <MenuIcon className="h-5 w-5 md:hidden" />
      </I>
      <SideBox hide={() => setSideBar(false)} active={sideBar} />
    </>
  );
};

export default SideBar;
