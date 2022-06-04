import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface SidebarItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  icon: ReactElement;
}
