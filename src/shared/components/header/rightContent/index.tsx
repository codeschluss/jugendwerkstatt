import { BellIcon, LogoutIcon, SearchIcon } from "@heroicons/react/outline";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  NotificationEntity,
  useGetMeBasicQuery,
  useGetNotificationsQuery,
  useSaveNotificationMutation,
} from "../../../../GraphQl/graphql";
import { useAuth } from "../../../../hooks/useAuth";
import detectDevice from "../../../utils/isTouch";
import DropDown from "../../ui/DropDown";
import I from "../../ui/IconWrapper";
import Avatar from "../sideBar/Avatar";
import Search from "./Search";
import Badge from "@mui/material/Badge";
import { BellIcon as FilledBell } from "@heroicons/react/solid";
import { Autocomplete, TextField } from "@mui/material";
import { Height } from "@mui/icons-material";

const RightContent: FC = () => {
  const isTouch = detectDevice();
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  const { handleLogout } = useAuth();
  const user = useGetMeBasicQuery();
  const notifications = useGetNotificationsQuery();
  const [saveNotification] = useSaveNotificationMutation();

  const unreadExist = notifications.data?.me?.notifications?.filter(
    (notification: NotificationEntity | undefined | null) => !notification?.read
  ).length;

  return (
    <div className="relative flex items-center justify-end flex-grow">
      <Search
        searchActive={toggleSearch || !isTouch}
        hideSearch={() => setToggleSearch(false)}
      />

      {!toggleSearch && (
        <I
          className="absolute text-white md:text-black right-12 md:hidden"
          onClick={() => setToggleSearch(true)}
        >
          <SearchIcon />
        </I>
      )}

      <DropDown
        position="right"
        className="hidden pr-3 ml-3 mr-3 border-r border-gray-200 md:block"
        boxClassName="w-72 mt-3 py-2.5 px-4"
        name={<Avatar size="8" />}
      >
        <div>
          <div className="flex justify-start pb-4 mb-4 border-b-2">
            <Avatar size="10" />
            <div className="flex flex-col justify-around h-20 ml-4">
              <p className="text-lg">{user.data?.me?.fullname}</p>
              <p className="text-xs">{user.data?.me?.email}</p>
              <Link to="/profile">
                <p className="mt-3 text-lg">Profil Bearbeiten</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around h-24 pb-4 mb-4 border-b-2 ">
            <Link to="/profile-password">
              <p>Passwort ändern</p>
            </Link>
            <p>E-Mail Benachrichtigungen</p>
          </div>
          <div className="flex items-center justify-start">
            {" "}
            <I className="hidden w-8 h-8 text-white cursor-pointer md:text-black md:flex">
              <LogoutIcon onClick={handleLogout} />
            </I>{" "}
            <p onClick={handleLogout} className="cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      </DropDown>

      <DropDown
        position="right"
        className="block pr-3 ml-3 mr-3 md:border-r md:border-gray-200 "
        boxClassName=" mt-3 w-72 md:w-96 py-2.5 px-2 "
        withArrow={false}
        name={
          <Badge
            badgeContent={
              notifications.data?.me?.notifications?.filter(
                (el: NotificationEntity | undefined | null) => !el?.read
              ).length
            }
            color="error"
          >
            {unreadExist ? (
              <FilledBell className="w-5 text-white md:text-black" />
            ) : (
              <BellIcon className="w-5 text-white md:text-black" />
            )}
          </Badge>
        }
      >
        <div>
          <ul className="list-style-type: none">
            {notifications.data?.me?.notifications
              ?.filter((el: NotificationEntity | undefined | null) => !el?.read)
              .map((el: any) => {
                const weekDays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
                const weekDay = weekDays[new Date(el.created).getDay()];
                const year = `${new Date(el.created).getFullYear()}`;
                const month = `${new Date(el.created).getMonth()}`;
                const date = `${new Date(el.created).getDate()}`;
                return (
                  <li
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
                    key={el.title}
                    className={`border-b-[1px] p-2  border-gray-400 cursor-pointer ${
                      !el.read && "bg-gray-100"
                    }`}
                  >
                    <p className={`text-base mt-2 ${!el.read && "font-bold"}`}>
                      {el?.title}
                    </p>
                    <p className={`text-sm  ${!el.read && "font-bold"} `}>
                      {el?.content}
                    </p>
                    <p className="text-sm ">{`${weekDay}, ${date}.${month}.${year}`}</p>
                  </li>
                );
              })}
            <Link to="notifications">
              {" "}
              <p
                style={{ color: "blue" }}
                className="mt-2 text-sm text-center "
              >
                see all notifications
              </p>
            </Link>
          </ul>
        </div>
      </DropDown>
      <I className="hidden w-6 h-6 text-white cursor-pointer md:text-black md:flex md:ml-6">
        <LogoutIcon onClick={handleLogout} />
      </I>
    </div>
  );
};

export default RightContent;
