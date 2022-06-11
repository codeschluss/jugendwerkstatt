import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { ListItemProps } from '../../atoms/ListItem/ListItem.props';

export interface ListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  title: string;
}

export interface ListComposition {
  Item: FC<ListItemProps>;
}
