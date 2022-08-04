import { BellIcon, LogoutIcon, SearchIcon } from "@heroicons/react/outline";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NotificationEntity,
  SearchDto,
  useAddListenerSubscription,
  useGetMeBasicQuery,
  useGetMeNotificationsQuery,
  useSaveNotificationMutation,
  useSearchQuery,
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
import { idText } from "typescript";
import { readAuthToken } from "../../../utils";

const RightContent: FC = () => {
  const { handleLogout } = useAuth();
  const user = useGetMeBasicQuery();
  const notifications = useGetMeNotificationsQuery({
    fetchPolicy: "network-only",
  });
  const [saveNotification] = useSaveNotificationMutation();
  const navigate = useNavigate();
  const accessToken = readAuthToken("accessToken");

  const searchfield: any = [];

  const search = useSearchQuery({
    variables: {
      params: {
        page: 0,
        size: 5,
      },
    },
  });

  search.data?.search?.map((el: any) => {
    searchfield.push({ label: el.title, type: el.type });
  });

  const searching = (e: any) => {
    search.refetch({
      params: {
        search: e.target.value,
        page: 0,
        size: 5,
      },
    });
  };

  const handleSearch = (searchParams: string) => {
    search
      .refetch({
        params: {
          search: searchParams,
        },
      })
      .then((data: any) => {
        if (data.data.search.length <= 3) {
          switch (data?.data?.search[0]?.type) {
            case "event":
              navigate(`event/${data?.data?.search[0]?.id}`);
              break;
            case "jobAd":
              navigate(`job-ad/${data?.data?.search[0]?.id}`);
              break;
            case "template":
              navigate(`forms`);
              break;
          }
        }
      });
  };

  const unreadExist = notifications.data?.me?.notifications?.filter(
    (notification: NotificationEntity | undefined | null) => !notification?.read
  ).length;

  const addListener = useAddListenerSubscription({
    skip: !accessToken,
    variables: {
      token: accessToken,
    },
  });
  let data = addListener.data?.addListener;

  useEffect(() => {
    notifications.refetch();
  }, [data]);

  return (
    <div className="relative flex items-center justify-end flex-grow">
      <Autocomplete
        freeSolo
        id="combo-box-demo"
        options={searchfield}
        sx={{
          width: 280,
          marginRight: 1,
          background: "white",
          borderRadius: 1,
        }}
        renderInput={(params) => (
          <TextField
            onKeyPress={(e: any) => {
              if (e.key === "Enter") {
                handleSearch(e.target.value);
              }
            }}
            onChange={searching}
            {...params}
            label="Suche"
          />
        )}
      />

      <DropDown
        position="right"
        className="hidden pr-3 ml-3 mr-3 border-r border-gray-200 md:block"
        boxClassName="w-72 mt-3 py-2.5 px-4"
        name={<Avatar fullname={user.data?.me?.fullname} />}
      >
        <div>
          <div className="flex justify-start pb-4 mb-4 border-b-2">
            <Avatar fullname={user?.data?.me?.fullname} />
            <div className="flex flex-col justify-around h-20 ml-4">
              <p className="text-lg">{user.data?.me?.fullname}</p>
              <p className="text-xs">{user.data?.me?.email}</p>
              <Link to="/profile">
                <p className="mt-3 text-lg">Profil bearbeiten</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around h-24 pb-4 mb-4 border-b-2 ">
            <Link to="/profile-password">
              <p>Passwort ändern</p>
            </Link>
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
                    className={`border-b-[1px] p-2  border-white cursor-pointer`}
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
                Alle Benachrichtigungen ansehen
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
