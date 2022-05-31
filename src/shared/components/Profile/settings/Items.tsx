import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

interface ItemProps {
  text?: string;
  link: string;
}

const Items: React.FC<ItemProps> = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className="flex items-center justify-between w-full my-8">
        <div>{text}</div>
        <ChevronRightIcon className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default Items;
