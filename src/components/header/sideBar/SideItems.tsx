import {
  ChatAltIcon,
  HomeIcon,
  CalendarIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  BookOpenIcon,
  PaperAirplaneIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import I from "../../ui/IconWrapper";

interface SideItemsProps {
  clicked?: () => void;
}

const SideItems: React.FunctionComponent<SideItemsProps> = ({ clicked }) => {
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
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
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
          to={"/Forms"}
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
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
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
            <I className="mr-2">
              <PaperAirplaneIcon />
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
          to={"/MediaLibrary"}
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
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
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
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
          to={"/jobs"}
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
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
          to={"/EventsCalendar"}
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
            <I className="mr-2">
              <CalendarIcon />
            </I>
            <span>Kalendar</span>
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
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
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
          to={"/profile"}
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
            <I className="mr-2">
              <CogIcon />
            </I>
            <span>Einstellungen</span>
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
          to={"/profile"}
          onClick={clicked}
        >
          <span className="flex items-center px-4 py-2 font-medium text-[#424242] ">
            <I className="mr-2">
              <QuestionMarkCircleIcon />
            </I>
            <span>Hilfe</span>
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
