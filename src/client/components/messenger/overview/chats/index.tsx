import dayjs from "dayjs";
import { useEffect } from "react";
import {
    ParticipantEntity, useGetMeChatsQuery
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
        .map((el: ParticipantEntity | undefined | null) => {
          const unreadChats = el?.chat?.messages
            ?.filter((x) => x?.participant?.user?.id !== getChats.data?.me?.id)
            .filter(
              (fl) =>
                !fl?.readReceipts?.some(
                  (a) => a?.participant?.user?.id === getChats.data?.me?.id
                )
            ).length;

          const notMe: any = el?.chat?.participants?.filter(
            (el: ParticipantEntity | undefined | null) =>
              el?.user?.id !== getChats.data?.me?.id
          ) as ParticipantEntity | undefined | null;
          return (
            <Item
              unreadChats={unreadChats ? unreadChats : undefined}
              key={el?.id}
              href={`/messenger/chat/${el?.chat?.id}`}
              name={el?.chat?.name ? el.chat?.name : notMe[0]?.user?.fullname}
              description={
                <span className="flex items-center">
                  {`${
                    el?.chat?.lastMessage?.participant?.user?.id ===
                    getChats?.data?.me?.id
                      ? "Du:"
                      : el?.chat?.lastMessage?.participant?.user?.fullname
                      ? el?.chat?.lastMessage?.participant?.user?.fullname +
                          ":" || "awd"
                      : ""
                  } `}
                  {el?.chat?.lastMessage?.content
                    ? el?.chat?.lastMessage?.content
                    : ""}
                </span>
              }
              imgUrl={
                el?.chat?.avatar?.id
                  ? `data:${el?.chat?.avatar?.mimeType};base64,${el?.chat?.avatar?.base64}`
                  : notMe[0]?.user?.profilePicture &&
                    `data:${notMe[0]?.user?.profilePicture?.mimeType};base64,${notMe[0]?.user?.profilePicture?.base64}`
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
