import React from "react";

const Row: React.FC<{ rowItem?: any }> = ({ rowItem }) => {
  return (
    rowItem && (
      <h4 className="bg-gray-200 w-full mx-[1px]  my-2 flex h-6 justify-center text-gray-800">
        {rowItem}
      </h4>
    )
  );
};

export default Row;
