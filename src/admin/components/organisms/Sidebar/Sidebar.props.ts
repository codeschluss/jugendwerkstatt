import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { SidebarItemProps } from '../../molecules/Sidebar/SidebarItem/SidebarItem.props';
import { SidebarItemsProps } from '../../molecules/Sidebar/SidebarItems/SidebarItems.props';

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export interface SidebarComposition {
  Item: FC<SidebarItemProps>;
  Items: FC<SidebarItemsProps>;
}
