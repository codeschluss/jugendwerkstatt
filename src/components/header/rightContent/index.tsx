import { BellIcon, SearchIcon, LogoutIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import Search from "./Search";
import I from "../../ui/IconWrapper";
import AuthContext from "../../../contexts/AuthContext";
import detectDevice from "../../../utils/isTouch";
import { API_URL } from "../../../config/app";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const isTouch = detectDevice();
  const { theUser } = useContext(AuthContext);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

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
      <img
        className="h-7 w-7 object-cover rounded-full md:ml-16"
        src={`${API_URL}media/${theUser?.profilePicture?.id}`}
        alt=""
      />
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
