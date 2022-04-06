import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Search from "./Search";
import I from "../../ui/IconWrapper";

interface RightContentProps {}

const RightContent: React.FC<RightContentProps> = () => {
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

      <img src="/assets/avatar-temp.png" alt="" />
    </div>
  );
};

export default RightContent;
