import { PencilIcon, XIcon } from '@heroicons/react/outline';
import { FC, ReactElement } from 'react';
import { Button } from '../Form/Button/Button';
import { ListItemProps } from './ListItem.props';

export const ListItem: FC<ListItemProps> = ({
  onUpdate,
  onDelete,
  children,
  ...rest
}): ReactElement => (
  <li
    className="flex items-center justify-between p-3 my-4 bg-white rounded-sm"
    {...rest}
  >
    {children}
    <div className="flex">
      <Button
        onClick={onUpdate}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <PencilIcon className="w-5 mx-1 text-green-500" />
      </Button>

      <Button
        onClick={onDelete}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <XIcon className="w-5 mx-1 text-red-500" />
      </Button>
    </div>
  </li>
);

ListItem.displayName = 'List.Item';
