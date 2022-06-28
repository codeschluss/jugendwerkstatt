import dayjs from "dayjs";
import { useEffect } from "react";
import {
  ChatEntity,
  ParticipantEntity,
  useGetChatsQuery,
  useGetMeBasicQuery,
  UserEntity,
} from "../../../../../GraphQl/graphql";
import Item from "../Item";

const Chats = () => {
  const getChats = useGetChatsQuery({
    variables: {},
  });
  const me = useGetMeBasicQuery();
  const getMyChats = getChats.data?.getChats?.result?.filter(
    (el: ChatEntity | undefined | null) =>
      el?.participants?.some(
        (myId: ParticipantEntity | undefined | null) =>
          myId?.user?.id === me.data?.me?.id
      )
  );

  useEffect(() => {
    getChats.refetch();
  }, []);

  return (
    <div>
      {getMyChats?.map((el) => {
        const notMe: any = el?.participants?.filter(
          (el: ParticipantEntity | undefined | null) =>
            el?.user?.id !== me.data?.me?.id
        ) as ParticipantEntity | undefined | null;
        return (
          <Item
            key={el?.id}
            href={`/messenger/chat/${el?.id}`}
            name={el?.name ? el.name : notMe[0]?.user?.fullname}
            description={
              <span className="flex items-center">
                Risus dignissim donec ada
              </span>
            }
            imgUrl="/assets/avatarSmall2.png"
            rightInfo={
              <span className="text-sm">
                {dayjs(el?.modified).format("HH:mm")}
              </span>
            }
          />
        );
      })}
    </div>
  );
};

export default Chats;
