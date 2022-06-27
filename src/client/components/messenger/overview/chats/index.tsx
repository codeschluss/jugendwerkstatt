import dayjs from "dayjs";
import { useGetChatsQuery } from "../../../../../GraphQl/graphql";
import Item from "../Item";

const Chats = () => {
  const getChats = useGetChatsQuery();
  console.log(getChats.data?.getChats?.result, "as");

  return (
    <div>
      {getChats.data?.getChats?.result?.map((el) => (
        <Item
          key={el?.id}
          href={`/messenger/chat/${el?.id}`}
          name={el?.name}
          description={
            <span className="flex items-center">Risus dignissim donec ada</span>
          }
          imgUrl="/assets/avatarSmall2.png"
          rightInfo={
            <span className="text-sm">
              {dayjs(el?.modified).format("HH:mm")}
            </span>
          }
        />
      ))}
    </div>
  );
};

export default Chats;
