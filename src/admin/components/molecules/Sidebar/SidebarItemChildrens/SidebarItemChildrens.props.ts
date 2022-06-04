import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavigationItemChildrensProps } from '../../../../interfaces/interfaces/NavigationItem.props';

export interface SidebarItemChildrensProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  show: boolean;
  baseUrl: string;
  items: NavigationItemChildrensProps[];
}
