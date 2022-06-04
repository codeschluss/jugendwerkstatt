import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { NavigationItemProps } from '../../../../interfaces/interfaces/NavigationItem.props';

export interface SidebarItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item?: Partial<NavigationItemProps>;
  icon?: ReactElement;
  handleSidebarToggler?: () => void;
  isSidebarOpen: boolean;
}
