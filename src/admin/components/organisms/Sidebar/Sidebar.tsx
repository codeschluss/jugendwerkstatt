import { FC, ReactElement, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { SidebarItem } from '../../molecules/Sidebar/SidebarItem/SidebarItem';
import { SidebarItems } from '../../molecules/Sidebar/SidebarItems/SidebarItems';
import { navigationItems } from '../../../static/navigationItems';
import { SidebarComposition, SidebarProps } from './Sidebar.props';
import { ButtonVariantsEnum } from '../../../interfaces/enums/ButtonVariants.enum';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';

const Sidebar: FC<SidebarProps> & SidebarComposition = (): ReactElement => {
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
          isSidebarOpen ? (
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          ) : (
            <ChevronDoubleRightIcon className="w-5 h-5" />
          )
        }
        onClick={handleSidebarToggler}
      >
        {isSidebarOpen && 'Menü einklappen'}
      </Button>
    </aside>
  );
};

Sidebar.Item = SidebarItem;
Sidebar.Items = SidebarItems;
export default Sidebar;
