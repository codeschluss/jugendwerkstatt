import RightContent from './rightContent';
import SideBar from './sideBar';

const Header = ({ adminHeader = false }: { adminHeader?: boolean }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-2 bg-primary md:bg-white md:px-12">
      {!adminHeader && <SideBar />}
      <RightContent />
    </header>
  );
};

export default Header;
