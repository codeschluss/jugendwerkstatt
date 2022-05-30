import { BellIcon, SearchIcon, LogoutIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import Search from "./Search";
import I from "../../ui/IconWrapper";
import detectDevice from "../../../utils/isTouch";
import { API_URL } from "../../../config/app";
import { useGetMeBasicQuery } from "../../../GraphQl/graphql";
import DropDown from "../../ui/DropDown";

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
        position="left"
        className="mr-3 border-r border-gray-200 pr-3"
        boxClassName="w-20 mt-3 py-2.5 px-2"
        name={
          <img
            className="h-7 w-7 object-cover rounded-full md:ml-16"
            src={`${API_URL}media/${user.data?.me?.profilePicture?.id}`}
            alt=""
          />
        }
      >
        <ul>
          <li className="flex justify-between cursor-pointer">
            <p className="flex justify-between">
              <span className="ml-4 text-sm">EL</span>
            </p>
          </li>
        </ul>
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
