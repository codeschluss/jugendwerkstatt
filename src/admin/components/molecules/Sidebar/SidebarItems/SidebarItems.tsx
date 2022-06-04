import { FC } from 'react';
import { SidebarItemsProps } from './SidebarItems.props';

export const SidebarItems: FC<SidebarItemsProps> = ({ children, ...rest }) => (
  <ul className="px-3 py-4" {...rest}>
    {children}
  </ul>
);

SidebarItems.displayName = 'Sidebar.Item';
