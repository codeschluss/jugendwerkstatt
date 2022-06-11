import { FC } from 'react';

import { ListItem } from '../../atoms/ListItem/ListItem';
import { ListComposition, ListProps } from './List.props';

const List: FC<ListProps> & ListComposition = ({
  title,
  children,
  ...rest
}) => (
  <ul className="max-w-4xl" {...rest}>
    <div className="p-8 bg-white rounded-sm">
      <h1>{title}</h1>
    </div>

    {children}
  </ul>
);

List.Item = ListItem;

export default List;
