import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ListItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  isActive?: boolean;
  onUpdate?: () => void;
  onDelete?: () => void;
  onApprove?: () => void;
}
