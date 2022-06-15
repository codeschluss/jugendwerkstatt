import { ReactElement } from "react";
import { PencilIcon, XIcon } from "@heroicons/react/outline";
import { DragHandle } from "../DragList/DragHelpers";
import { Button } from "../Form/Button/Button";
import { ListItemProps } from "./ListItem.props";

export const ListItem = ({
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
  </div>
);

ListItem.displayName = "List.Item";
