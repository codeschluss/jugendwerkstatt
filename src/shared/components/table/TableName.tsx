import React from "react";

const TableName: React.FC<{ rowName?: string }> = ({ rowName }) => {
  return (
    <div className="w-full mx-[1px] text-center">
      <h4 className="bg-gray-800 w-full text-white">{rowName}</h4>
    </div>
  );
};

export default TableName;
