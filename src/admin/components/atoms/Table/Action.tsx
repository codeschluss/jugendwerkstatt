import { FC, ReactElement } from "react";
import { CheckIcon, PencilIcon, XIcon } from "@heroicons/react/outline";

import { ActionProps } from "./Table.types";
import { Button } from "../Form/Button/Button";

export const Action: FC<ActionProps> = ({
  onUpdate,
  onDelete,
  onSend,
  onApprove,
}): ReactElement => (
  <span className="flex justify-center items-center py-[4px]">
    {onApprove && (
      <Button
        onClick={onApprove}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <CheckIcon className="w-5 mx-1 text-green-500" />
      </Button>
    )}
    {onSend && (
      <Button
        onClick={onSend}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <svg
          className="w-5 mx-1 text-gray-800"
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.425 3.025L8.68333 5.70833L2.41667 4.875L2.425 3.025ZM8.675 10.2917L2.41667 12.975V11.125L8.675 10.2917ZM0.758333 0.5L0.75 6.33333L13.25 8L0.75 9.66667L0.758333 15.5L18.25 8L0.758333 0.5Z"
            fill="#424242"
          />
        </svg>
      </Button>
    )}
    {onUpdate && (
      <Button
        onClick={onUpdate}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <PencilIcon className="w-5 mx-1 text-green-800" />
      </Button>
    )}
    {onDelete && (
      <Button
        onClick={onDelete}
        className="p-0 bg-transparent border-none shadow-none hover:shadow-none"
      >
        <XIcon className="w-5 mx-1 text-red-500" />
      </Button>
    )}
  </span>
);
