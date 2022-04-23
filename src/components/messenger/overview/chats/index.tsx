import React from "react";
import Item from "../Item";

const Chats = () => {
  return (
    <div>
      <Item
        href={`/messenger/chat/${2}`}
        name="Jane Cooper"
        description={
          <span className="flex items-center">Risus dignissim donec ada</span>
        }
        imgUrl="/assets/avatarSmall2.png"
        rightInfo={<span className="text-sm">11:52</span>}
      />
    </div>
  );
};

export default Chats;
