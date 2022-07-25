import React from "react";
import {
  useGetMeNotificationsQuery,
  useSaveNotificationMutation,
} from "../../../GraphQl/graphql";

const Notifications = () => {
  const notifications = useGetMeNotificationsQuery({
    fetchPolicy: "cache-and-network",
  });
  const [saveNotification] = useSaveNotificationMutation();

  console.log(notifications.data, "noti");

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
              }).then(() => notifications.refetch())
            }
            key={el.id}
            className={`border-b-[1px] p-2  border-gray-400 cursor-pointer md: 
            flex justify-around items-center  ${!el.read && "bg-gray-100"}`}
          >
            <p className={`text-base mt-2 ${!el.read && "font-bold"}`}>
              {el?.title}
            </p>
            <p className={`text-sm  ${!el.read && "font-bold"} `}>
              {el?.content}
            </p>
            <p className="text-sm ">{`${weekDay}, ${date}.${month}.${year}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
