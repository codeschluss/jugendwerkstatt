import Head from "./Head";
import SideItems from "./SideItems";

interface SideBoxProps {
  active: boolean;
  hide: () => void;
}

const SideBox: React.FC<SideBoxProps> = ({ active, hide }) => {
  return (
    <>
      <div
        className={`w-60 bg-white fixed left-0 top-0
        h-full drop-shadow-xl z-20 transition transform-gpu duration-500 ${
          active
            ? "translate-x-0 opacity-1 pointer-events-auto"
            : "-translate-x-60 opacity-0 pointer-events-none"
        }`}
      >
        <Head />
        <SideItems />
      </div>
      {active && (
        <span
          onClick={hide}
          className="fixed inset-0 z-10 bg-black bg-opacity-40"
        />
      )}
    </>
  );
};

export default SideBox;
