import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import Search from "./Search";
import I from "../../ui/IconWrapper";
import AuthContext from "../../../contexts/AuthContext";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
  const { theUser } = useContext(AuthContext);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);

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
      <BellIcon className="h-6 w-6 text-white " />
    </div>
  );
};

export default RightContent;
