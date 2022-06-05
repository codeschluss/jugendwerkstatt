import Head from "./Head";
import SideItems from "./SideItems";
import detectDevice from "../../../utils/isTouch";
import { useContext } from "react";
import SideBarContext from "../../../../contexts/SideBarContext";

interface SideBoxProps {
  active: boolean;
  hide: () => void;
}

const SideBox: React.FC<SideBoxProps> = ({ active, hide }) => {
  const isTouch = detectDevice();
  const { setSideBar, sideBar } = useContext(SideBarContext);
  return (
    <>
      <div
        className={`w-60 bg-white md:bg-primary  fixed left-0 top-0
        h-full drop-shadow-xl md:drop-shadow-none z-20 transition transform-gpu duration-500 ${
          active
            ? "translate-x- opacity-1 pointer-events-auto"
            : !isTouch
            ? "-translate-x-40 opacity-1"
            : "-translate-x-60 opacity-1"
          // : `-translate-x-${!isTouch ? "40" : "60"} opacity-1 `
        }`}
      >
        {isTouch && <Head />}

        <SideItems clicked={hide} />
      </div>
      {active && isTouch && (
        <span
          onClick={hide}
          className="fixed inset-0 z-10 bg-black bg-opacity-40"
        />
      )}
    </>
  );
};

export default SideBox;
