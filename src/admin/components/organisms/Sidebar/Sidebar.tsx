import { FC, ReactElement, useState } from "react";
import { navigationItems } from "../../../static/navigationItems";
import { SidebarComposition, SidebarProps } from "./Sidebar.props";
import { ButtonVariantsEnum } from "../../../interfaces/enums/ButtonVariants.enum";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import { Button } from "../../atoms";
import { SidebarItem, SidebarItems } from "../../molecules";

export const Sidebar: FC<SidebarProps> &
  SidebarComposition = (): ReactElement => {
  /**
   * local state
   */
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  /**
   * handlers
   */
  const handleSidebarToggler = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <aside className="dashboard-sidebar">
      <Sidebar.Items>
        {navigationItems.map(({ name, icon, href, childrens }) => (
          <Sidebar.Item
            key={href}
            icon={icon}
            item={{ href, childrens }}
            handleSidebarToggler={handleSidebarToggler}
            isSidebarOpen={isSidebarOpen}
          >
            {isSidebarOpen && name}
          </Sidebar.Item>
        ))}
      </Sidebar.Items>

      <Button
        variant={ButtonVariantsEnum.LINK}
        iconRight={
          isSidebarOpen ? <ChevronDoubleLeftIcon /> : <ChevronDoubleRightIcon />
        }
        onClick={handleSidebarToggler}
      >
        {isSidebarOpen && "Menü einklappen"}
      </Button>
    </aside>
  );
};

Sidebar.Item = SidebarItem;
Sidebar.Items = SidebarItems;
