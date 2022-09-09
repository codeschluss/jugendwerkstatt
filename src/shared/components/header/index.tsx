import RightContent from "./rightContent";
import SideBar from "./sideBar";

const Header = () => (
  <header className="sticky top-0 z-10 flex items-center justify-between px-1 pb-2 pt-7 bg-primary md:bg-white md:px-12">
    <SideBar />
    <RightContent />
  </header>
);

export default Header;
