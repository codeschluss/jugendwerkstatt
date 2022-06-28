import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../../shared/components/header/sideBar/Avatar";

interface ItemProps {
  name?: string | undefined | null;
  description?: React.ReactNode;
  rightInfo?: React.ReactNode;
  imgUrl?: any;
  href?: string;
  onClick?: () => void;
}

///assets/avatarSmall2.png

const Item: React.FC<ItemProps> = ({
  name,
  description,
  rightInfo,
  imgUrl,
  href,
  onClick,
}) => {
  return (
    <Link to={href || ""}>
      <div className="flex flex-row w-full  my-3" onClick={onClick}>
        {imgUrl ? (
          <img
            src={imgUrl}
            className="w-10 h-10 rounded-full"
            alt={name || null || undefined}
          />
        ) : (
          <Avatar fullname={name} />
        )}
        <div
          className="flex flex-row border-b w-full
border-gray-500 justify-between ml-3 pb-1 items-center"
        >
          <div className="flex flex-col w-full ">
            <p className="text-base">{name}</p>
            {description && <div className="flex text-xs">{description}</div>}
          </div>
          {rightInfo && (
            <div className="text-xl text-center text-gray-border-gray-500">
              {rightInfo}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Item;
