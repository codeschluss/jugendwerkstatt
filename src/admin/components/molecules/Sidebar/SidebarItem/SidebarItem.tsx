import { FC } from 'react';
import { SidebarItemProps } from './SidebarItem.props';

export const SidebarItem: FC<SidebarItemProps> = ({
  icon,
  children,
  ...rest
}) => (
  <li className="flex items-center mb-8 gap-x-3" {...rest}>
    <span className="w-5 h-5 text-white">{icon}</span>
    <span className="text-white">{children}</span>
  </li>
);

SidebarItem.displayName = 'Sidebar.Item';
