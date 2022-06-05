import Xicon from "@heroicons/react/solid/XIcon";
import I from "../../ui/IconWrapper";

interface SearchProps {
  searchActive: boolean;
  hideSearch: () => void;
}

const Search: React.FC<SearchProps> = ({ searchActive, hideSearch }) => {
  return (
    <div
      className={`h-10 pl-4 relative pr-7 duration-500 ease-in-out transform-gpu transition-all md:border rounded-md md:w-72  ${
        searchActive
          ? " w-full opacity-100 pointer-events-auto"
          : " w-10 opacity-0 pointer-events-none"
      }`}
    >
      <input
        className="w-full h-full rounded-md bg-white px-4 outline-none"
        type="text"
        placeholder="Search..."
      />
      <I
        className="absolute top-0 right-7 opacity-50 md:hidden"
        onClick={hideSearch}
      >
        <Xicon />
      </I>
    </div>
  );
};

export default Search;
