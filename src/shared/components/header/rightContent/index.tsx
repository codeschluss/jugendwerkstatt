import { BellIcon, LogoutIcon, SearchIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  NotificationEntity,
  useGetMeBasicQuery,
  useGetNotificationsQuery,
  useSaveNotificationMutation,
} from "../../../../GraphQl/graphql";
import useAuth from "../../../../hooks/useAuth";
import detectDevice from "../../../utils/isTouch";
import DropDown from "../../ui/DropDown";
import I from "../../ui/IconWrapper";
import Avatar from "../sideBar/Avatar";
import Search from "./Search";
import Badge from "@mui/material/Badge";
import { BellIcon as FilledBell } from "@heroicons/react/solid";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const isTouch = detectDevice();
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  const { logout } = useAuth();
  const user = useGetMeBasicQuery();
  const notifications = useGetNotificationsQuery();
  const [saveNotification] = useSaveNotificationMutation();
  const unreadExist = notifications.data?.me?.notifications?.filter(
    (notification: NotificationEntity | undefined | null) => !notification?.read
  ).length;

  return (
    <div className="flex items-center flex-grow justify-end relative">
      <Search
        searchActive={toggleSearch || !isTouch}
        hideSearch={() => setToggleSearch(false)}
      />
      {!toggleSearch && (
        <I
          className="text-white md:text-black absolute right-12 md:hidden"
          onClick={() => setToggleSearch(true)}
        >
          <SearchIcon />
        </I>
      )}

      <DropDown
        position="right"
        className="mr-3 ml-3 border-r border-gray-200 pr-3 hidden md:block"
        boxClassName="w-72 mt-3 py-2.5 px-4"
        name={<Avatar size="8" />}
      >
        <div>
          <div className="flex justify-start border-b-2 mb-4 pb-4">
            <Avatar size="10" />
            <div className="h-20 flex flex-col justify-around ml-4">
              <p className="text-lg">{user.data?.me?.fullname}</p>
              <p className="text-xs">{user.data?.me?.email}</p>
              <Link to="profile">
                <p className="text-lg mt-3">Profil Bearbeiten</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-around items-start mb-4 pb-4 border-b-2 h-24 ">
            <Link to="/profile-password">
              <p>Passwort ändern</p>
            </Link>
            <p>E-Mail Benachrichtigungen</p>
          </div>
          <div className="flex items-center justify-start">
            {" "}
            <I className="h-8 w-8 text-white md:text-black hidden md:flex cursor-pointer">
              <LogoutIcon onClick={logout} />
            </I>{" "}
            <p onClick={logout} className="cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      </DropDown>

      <DropDown
        position="right"
        className="mr-3  ml-3  md:border-r md:border-gray-200 pr-3  block "
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
              <FilledBell className="text-white md:text-black w-5" />
            ) : (
              <BellIcon className="text-white md:text-black w-5" />
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
                className="text-sm text-center mt-2 "
              >
                see all notifications
              </p>
            </Link>
          </ul>
        </div>
      </DropDown>
      <I className="h-6 w-6 text-white md:text-black hidden md:flex md:ml-6 cursor-pointer">
        <LogoutIcon onClick={logout} />
      </I>
    </div>
  );
};

export default RightContent;
