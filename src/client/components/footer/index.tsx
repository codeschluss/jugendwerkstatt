import {
  HomeIcon,
  ChatAltIcon,
  CalendarIcon,
  NewspaperIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
import I from "../../../shared/components/ui/IconWrapper";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary justify-around py-2 text-white flex sticky bottom-0">
      <NavLink
        className={(navData) =>
          navData.isActive ? "border-b border-white" : ""
        }
        to="/"
      >
        <I>
          <HomeIcon />
        </I>
      </NavLink>
      <I>
        <NewspaperIcon />
      </I>
      <I>
        <CalendarIcon />
      </I>
      <I>
        <AcademicCapIcon />
      </I>
      <I>
        <ChatAltIcon />
      </I>
    </footer>
  );
};

export default Footer;
