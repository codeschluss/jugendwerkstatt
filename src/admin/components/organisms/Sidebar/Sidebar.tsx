import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { FC, ReactElement, useContext } from "react";
import SideBarContext from "../../../../contexts/SideBarContext";
import { useGetGroupsQuery } from "../../../../GraphQl/graphql";
import Head from "../../../../shared/components/header/sideBar/Head";
import Item from "../../../../shared/components/header/sideBar/Item";
import detectDevice from "../../../../shared/utils/isTouch";
import { navItems } from "../../../static/navItems";
import { twClsx } from "../../../utils";
import Nav from "../../molecules/Nav/Nav";
import { SidebarProps } from "./Sidebar.props";

export const Sidebar: FC<SidebarProps> = (): ReactElement => {
  const { sideBar, setSideBar } = useContext(SideBarContext);
  const isTouch = detectDevice();

  const { data: { groups = null } = {} } = useGetGroupsQuery();

  const mappedGroups =
    groups?.result?.map((group) => ({
      name: group?.name || "",
      location: `groups/${group?.id || ""}/members`,
    })) || [];

  return (
    <div>
      <div
        className={twClsx(
          "w-auto bg-primary sticky h-full z-50 -translate-x-64 md:translate-x-0  opacity-1 drop-shadow-xl md:drop-shadow-none transition transform-gpu duration-500",
          sideBar ? "translate-x-0" : "-translate-x-64"
        )}
      >
        {isTouch && <Head />}
        <div className="flex flex-col justify-between h-full pb-4 overflow-auto bg-primary">
          <Nav data={navItems(mappedGroups)} />
        </div>
      </div>
      {sideBar && isTouch && (
        <>
          <span
            onClick={() => setSideBar(false)}
            className="fixed inset-0 z-10 bg-black bg-opacity-40"
          />
        </>
      )}
    </div>
  );
};
