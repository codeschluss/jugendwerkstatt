import { ReactElement } from 'react';

export interface NavItemModel {
  name: string;
  icon?: ReactElement;
  location?: string;
  items?: NavItemModel[];
  noItems?: boolean;
}

export interface NavModel {
  items: NavItemModel[];
}
