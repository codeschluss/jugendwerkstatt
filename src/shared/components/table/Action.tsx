import { DownloadIcon, PencilIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const Action: React.FC<{ onDownload?: any; onDelete?: any }> = ({
  onDownload,
  onDelete,
}) => {
  return (
    <div className="mx-[1px] w-full text-center">
      <span className="bg-gray-200 w-full text-white my-2 flex h-6 justify-center">
        {onDownload && (
          <DownloadIcon
            className="w-5 text-gray-700 cursor-pointer mx-1"
            onClick={onDownload}
          />
        )}
        {onDelete && (
          <XIcon
            className="w-5 text-red-500 cursor-pointer mx-1"
            onClick={() => onDelete()}
          />
        )}
      </span>
    </div>
  );
};

export default Action;
