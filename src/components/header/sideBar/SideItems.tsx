import { NavLink } from "react-router-dom";
import { HomeIcon, ChatAltIcon } from "@heroicons/react/outline";
import I from "../../ui/IconWrapper";

interface SideItemsProps {}

const SideItems: React.FunctionComponent<SideItemsProps> = () => {
  return (
    <ul>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "border-l-4 bg-gray-100 border-primary block"
              : `border-l-4 border-transparent block`
          }
          to={"/"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <HomeIcon />
            </I>
            <span>Start</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "border-l-4 bg-gray-100 border-primary block"
              : `border-l-4 border-transparent block`
          }
          to={"/messenger"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Messenger</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "border-l-4 bg-gray-100 border-primary block"
              : `border-l-4 border-transparent block`
          }
          to={"/messenger"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Messenger</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "border-l-4 bg-gray-100 border-primary block"
              : `border-l-4 border-transparent block`
          }
          to={"/messenger"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Messenger</span>
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "border-l-4 bg-gray-100 border-primary block"
              : `border-l-4 border-transparent block`
          }
          to={"/forms"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Formulare</span>
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideItems;
