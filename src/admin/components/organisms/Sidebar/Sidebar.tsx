import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';
import { SidebarItem } from '../../molecules/Sidebar/SidebarItem/SidebarItem';
import { SidebarItems } from '../../molecules/Sidebar/SidebarItems/SidebarItems';
import { navigationItems } from '../../../static/navigationItems';
import { SidebarComposition, SidebarProps } from './Sidebar.props';

const Sidebar: FC<SidebarProps> & SidebarComposition = (): ReactElement => (
  <aside className="dashboard-sidebar">
    <Sidebar.Items>
      {navigationItems.map((item) => (
        <NavLink to={item.href} className="">
          <Sidebar.Item icon={item.icon}>{item.name}</Sidebar.Item>
        </NavLink>
      ))}
    </Sidebar.Items>
    <Button>Menü einklappen</Button>
  </aside>
);

Sidebar.Item = SidebarItem;
Sidebar.Items = SidebarItems;
export default Sidebar;
