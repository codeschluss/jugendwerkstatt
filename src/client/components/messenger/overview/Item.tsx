import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../../shared/components/header/sideBar/Avatar";
import { readAuthToken } from "../../../../shared/utils";

interface ItemProps {
  name?: string | undefined | null;
  description?: React.ReactNode;
  rightInfo?: React.ReactNode;
  imgUrl?: any;
  href?: string;
  onClick?: () => void;
  addMember?: () => void;
  deleteMember?: () => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  description,
  rightInfo,
  imgUrl,
  href,
  onClick,
  addMember,
  deleteMember,
}) => {
  const token = readAuthToken("accessToken");
  const [img, setImg] = useState<any>();

  const requestOptions: any = {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      responseType: "arraybuffer",
    },
  };
  const fetchImage = async () => {
    const res = await fetch(imgUrl, requestOptions);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    if (imgUrl) {
      fetchImage();
    }
  }, [imgUrl, token]);

  return (
    <div>
      <Link to={href || ""}>
        <div className="flex flex-row w-full md:w-1/4  my-3" onClick={onClick}>
          {imgUrl ? (
            <img
              src={img}
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
            {addMember && (
              <PlusCircleIcon
                onClick={addMember}
                className="w-7 text-green-600"
              />
            )}
            {deleteMember && (
              <XCircleIcon
                onClick={deleteMember}
                className="w-7 text-red-600"
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
