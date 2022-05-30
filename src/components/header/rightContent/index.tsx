import { BellIcon, SearchIcon, LogoutIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import Search from "./Search";
import I from "../../ui/IconWrapper";
import detectDevice from "../../../utils/isTouch";
import { API_URL } from "../../../config/app";
import { useGetMeBasicQuery } from "../../../GraphQl/graphql";
import DropDown from "../../ui/DropDown";
import Avatar from "../sideBar/Avatar";
import { Link } from "react-router-dom";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const isTouch = detectDevice();
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const user = useGetMeBasicQuery();

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
            <Avatar size="20" />
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
            <I className="h-8 w-8 text-white md:text-black hidden md:flex">
              <LogoutIcon />
            </I>{" "}
            <p>Logout</p>
          </div>
        </div>
      </DropDown>
      <I className="h-6 w-6 text-white md:text-black md:ml-6">
        <BellIcon />
      </I>
      <I className="h-6 w-6 text-white md:text-black hidden md:flex md:ml-6">
        <LogoutIcon />
      </I>
    </div>
  );
};

export default RightContent;
