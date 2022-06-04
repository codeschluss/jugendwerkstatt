import { ReactElement } from 'react';

export interface NavigationItemProps {
  name: string;
  icon: ReactElement;
  href: string;
  childrens?: NavigationItemChildrensProps[];
}

export interface NavigationItemChildrensProps {
  name: string;
  href?: string;
  childrens?: NavigationItemChildrensProps[];
}
