import { FC, ReactElement } from 'react';
import { navItems } from '../../../static/navItems';
import { twClsx } from '../../../utils';
import Nav from '../../molecules/Nav/Nav';
import { SidebarProps } from './Sidebar.props';

export const Sidebar: FC<SidebarProps> = (): ReactElement => (
  <aside className="dashboard-sidebar">
    <Nav.Wrapper
      className={twClsx('flex flex-col justify-between min-h-screen')}
    >
      <Nav data={navItems} />
    </Nav.Wrapper>
  </aside>
);
