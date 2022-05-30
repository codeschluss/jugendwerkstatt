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
import Item from "./Item";

interface SideItemsProps {
  clicked?: () => void;
}

const SideItems: React.FunctionComponent<SideItemsProps> = ({ clicked }) => {
  return (
    <ul>
      <Item name="Start" icon={<HomeIcon />} clicked={clicked} href="/" />
      <Item
        name="Formulare"
        icon={<DocumentTextIcon />}
        clicked={clicked}
        href="/Forms"
      />
      <Item
        name="Events"
        icon={<PaperAirplaneIcon />}
        clicked={clicked}
        href="/events"
      />
      <Item
        name="E-Learning"
        icon={<AcademicCapIcon />}
        clicked={clicked}
        href="/MediaLibrary"
      />
      <Item
        name="Messenger"
        icon={<ChatAltIcon />}
        clicked={clicked}
        href="/messenger"
      />
      <Item
        name="Stellenausschreibung"
        icon={<BookOpenIcon />}
        clicked={clicked}
        href="/jobs"
      />
      <Item
        name="Kalendar"
        icon={<CalendarIcon />}
        clicked={clicked}
        href="/EventsCalendar"
      />
      <Item
        name="Favoriten"
        icon={<HeartIcon />}
        clicked={clicked}
        href="/favorites"
      />
      <Item
        name="Einstellungen"
        icon={<CogIcon />}
        clicked={clicked}
        href="/profile"
      />
      <Item
        name="Hilfe"
        icon={<QuestionMarkCircleIcon />}
        clicked={clicked}
        href="/profile"
      />
    </ul>
  );
};

export default SideItems;
