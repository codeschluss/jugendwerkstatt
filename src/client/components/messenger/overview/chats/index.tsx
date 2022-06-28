import dayjs from "dayjs";
import { useEffect } from "react";
import {
  ChatEntity,
  ParticipantEntity,
  useGetChatsQuery,
  useGetMeBasicQuery,
  useGetMeChatsQuery,
  UserEntity,
} from "../../../../../GraphQl/graphql";
import Item from "../Item";

const Chats = () => {
  const getChats = useGetMeChatsQuery();

  useEffect(() => {
    getChats.refetch();
  }, []);

  return (
    <div>
      {getChats.data?.me?.participants?.map((el) => {
        const notMe: any = el?.chat?.participants?.filter(
          (el: ParticipantEntity | undefined | null) =>
            el?.user?.id !== getChats.data?.me?.id
        ) as ParticipantEntity | undefined | null;
        return (
          <Item
            key={el?.id}
            href={`/messenger/chat/${el?.id}`}
            name={el?.chat?.name ? el.chat?.name : notMe[0]?.user?.fullname}
            description={
              <span className="flex items-center">
                Risus dignissim donec ada
              </span>
            }
            imgUrl="/assets/avatarSmall2.png"
            rightInfo={
              <span className="text-sm">
                {dayjs(el?.chat?.modified).format("HH:mm")}
              </span>
            }
          />
        );
      })}
    </div>
  );
};

export default Chats;
