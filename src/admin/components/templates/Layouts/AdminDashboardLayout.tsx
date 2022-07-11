import { FC, useContext } from "react";
import SideBarContext from "../../../../contexts/SideBarContext";
import RightContent from "../../../../shared/components/header/rightContent";
import { Sidebar } from "../../organisms";
import IconWrapper from "../../../../shared/components/ui/IconWrapper";
import { MenuIcon } from "@heroicons/react/outline";
import { twClsx } from "../../../utils";

export const AdminDashboardLayout: FC = ({ children }) => {
  const { sideBar, setSideBar } = useContext(SideBarContext);

  return (
    <div className={twClsx("flex flex-row min-h-screen overflow-hidden")}>
      {/* Header */}
      <Sidebar />

      <div className={twClsx("w-full -translate-x-[237.9px] md:translate-x-0")}>
        <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-2 bg-primary md:bg-white md:px-12">
          <IconWrapper
            className="-ml-3 text-white md:hidden md:text-black"
            onClick={() => setSideBar(!sideBar)}
          >
            <MenuIcon className="w-5 h-5" />
          </IconWrapper>
          <RightContent />
        </header>
        {/* Main Content */}
        <main className="overflow-auto">{children}</main>
      </div>
    </div>
  );
};
