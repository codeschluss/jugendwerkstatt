import { PencilIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import {
  useDeleteTemplateMutation,
  useDeleteUploadsMutation,
} from "../../../GraphQl/graphql";

const Action: React.FC<{ onApprove?: any; onDelete?: any }> = ({
  onApprove,
  onDelete,
}) => {
  return (
    <div className="mx-[1px] w-full text-center">
      <span className="bg-gray-200 w-full text-white my-2 flex h-6 justify-center">
        {onApprove && <PencilIcon className="w-5 text-green-500 mx-1" />}
        {onDelete && (
          <XIcon className="w-5 text-red-500 mx-1" onClick={() => onDelete()} />
        )}
      </span>
    </div>
  );
};

export default Action;
