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
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import SideBarContext from "../../../../contexts/SideBarContext";
import I from "../../ui/IconWrapper";
import Item from "./Item";

interface SideItemsProps {
  clicked?: () => void;
}

const SideItems: React.FunctionComponent<SideItemsProps> = ({ clicked }) => {
  const { sideBar, setSideBar } = useContext(SideBarContext);
  return (
    <div className="h-full flex flex-col justify-between pb-4">
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
          href="/messenger/chats"
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
      {sideBar ? (
        <span
          className="text-center w-full text-white"
          onClick={() => setSideBar(false)}
        >
          Menu schliesen
        </span>
      ) : (
        <span
          onClick={() => setSideBar(true)}
          className="flex justify-end  pr-6 w-full text-white"
        >
          <ChevronDoubleRightIcon className="w-8" />
        </span>
      )}
    </div>
  );
};

export default SideItems;
