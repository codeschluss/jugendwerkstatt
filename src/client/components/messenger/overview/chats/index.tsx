import dayjs from "dayjs";
import { useEffect } from "react";
import { API_URL } from "../../../../../config/app";
import {
  ChatEntity,
  ParticipantEntity,
  useGetMeBasicQuery,
  useGetMeChatsQuery,
  UserEntity,
} from "../../../../../GraphQl/graphql";
import Item from "../Item";

const Chats = () => {
  const getChats = useGetMeChatsQuery({
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    getChats.refetch();
  }, []);

  return (
    <div className="px-8">
      {getChats.data?.me?.participants
        ?.slice()
        .sort((a, b) => {
          const contentA: any = new Date(a?.chat?.lastMessage?.created);
          const contentB: any = new Date(b?.chat?.lastMessage?.created);
          return contentB - contentA;
        })
        .map((el: ParticipantEntity | undefined | null | any) => {
          const notMe: any = el?.chat?.participants?.filter(
            (el: ParticipantEntity | undefined | null) =>
              el?.user?.id !== getChats.data?.me?.id
          ) as ParticipantEntity | undefined | null;
          console.log(notMe, "ellll");
          return (
            <Item
              key={el?.id}
              href={`/messenger/chat/${el?.chat?.id}`}
              name={el?.chat?.name ? el.chat?.name : notMe[0]?.user?.fullname}
              description={
                <span className="flex items-center">
                  {`${
                    el?.chat?.lastMessage?.participant?.user?.id ===
                    getChats?.data?.me?.id
                      ? "Du"
                      : el?.chat?.lastMessage?.participant?.user?.fullname
                  }: `}
                  {el?.chat?.lastMessage?.content}
                </span>
              }
              imgUrl={
                el?.chat?.avatar?.id
                  ? `${API_URL}media/${el?.chat?.avatar?.id}`
                  : notMe[0]?.user?.profilePicture &&
                    `${API_URL}media/${notMe[0]?.user?.profilePicture?.id}`
              }
              rightInfo={
                <span className="text-sm">
                  {dayjs(el?.chat?.lastMessage?.created).format("HH:mm")}
                </span>
              }
            />
          );
        })}
    </div>
  );
};

export default Chats;
