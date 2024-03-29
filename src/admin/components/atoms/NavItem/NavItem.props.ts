import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { NavItemModel } from '../../../interfaces/models/Nav.model';

export interface NavItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: NavItemModel;
  isLastChild: boolean;
}
