import { ReactElement } from 'react';
import { CheckIcon, PencilIcon, XIcon } from '@heroicons/react/outline';
import { DragHandle } from '../DragList/DragHelpers';
import { Button } from '../Form/Button/Button';
import { ListItemProps } from './ListItem.props';
import { twClsx } from '../../../utils';

export const ListItem = ({
  isActive = false,
  onApprove,
  onUpdate,
  onDelete,
}: ListItemProps): ReactElement => (
  <div className="flex">
    <DragHandle />
    {onUpdate && (
      <Button
        type="button"
        onClick={onUpdate}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <PencilIcon className="w-5 mx-1 text-green-500" />
      </Button>
    )}

    <Button
      type="button"
      onClick={onDelete}
      className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
    >
      <XIcon className="w-5 mx-1 text-red-500" />
    </Button>

    {onApprove && (
      <Button
        type="button"
        onClick={onApprove}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <CheckIcon
          className={twClsx(
            'w-5 mx-1',
            isActive ? 'text-green-500' : 'text-gray-500'
          )}
        />
      </Button>
    )}
  </div>
);

ListItem.displayName = 'List.Item';
