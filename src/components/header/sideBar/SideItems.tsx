import {
  ChatAltIcon,
  HomeIcon,
  DocumentTextIcon,
  CalendarIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";

import { HeartIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
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
          to={"/forms"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <DocumentTextIcon />
            </I>
            <span>Formulare</span>
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
          to={"/events"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <CalendarIcon />
            </I>
            <span>Events</span>
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
              <AcademicCapIcon />
            </I>
            <span>E-Learning</span>
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
              <BookOpenIcon />
            </I>
            <span>Stellenausschreibung</span>
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
          to={"/favorites"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <HeartIcon />
            </I>
            <span>Favoriten</span>
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
          to={"/jobs"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Jobs</span>
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
          to={"/map"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Map</span>
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
          to={"/mediaLibrary"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Media</span>
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
          to={"/login"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Login</span>
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
          to={"/register"}
        >
          <span className="flex items-center px-4 py-2 font-semibold ">
            <I className="mr-2">
              <ChatAltIcon />
            </I>
            <span>Register</span>
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideItems;
