import React from "react";
import {
  useGetMeNotificationsQuery,
  useSaveNotificationMutation,
} from "../../../GraphQl/graphql";
import { useAuthStore } from "../../../store";

const Notifications = () => {
  const { isAuthenticated } = useAuthStore();

  const notifications = useGetMeNotificationsQuery({
    skip: !isAuthenticated,
    fetchPolicy: "network-only",
  });
  const [saveNotification] = useSaveNotificationMutation();

  const sorted = notifications.data?.me?.notifications?.slice().sort((a, b) => {
    const contentA: any = new Date(a?.created);
    const contentB: any = new Date(b?.created);
    return contentB - contentA;
  });

  return (
    <div>
      {sorted?.map((el: any) => {
        const weekDays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        const weekDay = weekDays[new Date(el.created).getDay()];
        const year = `${new Date(el.created).getFullYear()}`;
        const month = `${new Date(el.created).getMonth()}`;
        const date = `${new Date(el.created).getDate()}`;
        return (
          <div
            onClick={() =>
              saveNotification({
                variables: {
                  entity: {
                    id: el.id,
                    read: true,
                  },
                },
              }).then(() => {
                isAuthenticated && notifications.refetch();
              })
            }
            key={el.id}
            className={`border-b-[1px] p-2 border-gray-400 cursor-pointer md: 
            flex md:justify-center md:ml-2 items-center  ${
              !el.read && "bg-gray-100"
            }`}
          >
            <p
              style={{ hyphens: "auto", wordBreak: "break-all" }}
              className={`text-base white-space:normal  mt-2 w-2/5 ${
                !el.read && "font-bold"
              }`}
            >
              {el?.title}
            </p>
            <p
              style={{ hyphens: "auto", wordBreak: "break-all" }}
              className={`text-sm white-space:normal
              mx-2 w-2/5 ${!el.read && "font-bold"} `}
            >
              {el?.content}
            </p>
            <p className="text-sm  white-space:normal w-1/5">{`${weekDay}, ${date}.${month}.${year}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
