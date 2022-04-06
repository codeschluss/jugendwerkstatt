import RightContent from "./rightContent";
import SideBar from "./sideBar";

const Header = () => {
  return (
    <header className="bg-primary px-5 py-2 flex justify-between items-center sticky top-0 z-10">
      <SideBar />
      <RightContent />
    </header>
  );
};

export default Header;
