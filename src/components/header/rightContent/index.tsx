import { SearchIcon } from "@heroicons/react/solid";
import { useContext, useState } from "react";
import Search from "./Search";
import I from "../../ui/IconWrapper";
import AuthContext from "../../../contexts/AuthContext";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const { theUser } = useContext(AuthContext);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

  console.log(theUser);

  return (
    <div className="flex items-center flex-grow justify-end relative">
      <Search
        searchActive={toggleSearch}
        hideSearch={() => setToggleSearch(false)}
      />
      {!toggleSearch && (
        <I
          className="text-white absolute right-12"
          onClick={() => setToggleSearch(true)}
        >
          <SearchIcon />
        </I>
      )}

      {theUser && (
        <img
          className="w-11 object-cover h-11 rounded-full"
          src={`http://localhost:8061/api/media/${theUser?.profilePicture?.id}`}
          alt=""
        />
      )}
    </div>
  );
};

export default RightContent;
