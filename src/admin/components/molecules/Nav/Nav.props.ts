import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { NavModel } from '../../../interfaces/models/Nav.model';
import { NavItemProps } from '../../atoms/NavItem/NavItem.props';

export interface NavProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  data: NavModel;
  showToggler?: boolean;
}

export interface NavComposition {
  Item: FC<NavItemProps>;
  Wrapper: FC<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  >;
}
