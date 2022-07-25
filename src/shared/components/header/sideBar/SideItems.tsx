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
  MapIcon,
  GlobeIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import SideBarContext from "../../../../contexts/SideBarContext";
import { useGetChatSettingsQuery } from "../../../../GraphQl/graphql";
import Item from "./Item";

interface SideItemsProps {
  clicked?: () => void;
}

const SideItems: React.FunctionComponent<SideItemsProps> = ({ clicked }) => {
  const { sideBar, setSideBar } = useContext(SideBarContext);
  const chatEnabled = useGetChatSettingsQuery({
    fetchPolicy: "network-only",
  });
  return (
    <div className="flex flex-col justify-between h-full pb-4">
      <ul>
        <Item name="Start" icon={<HomeIcon />} clicked={clicked} href="/" />
        <Item
          name="Formulare"
          icon={<DocumentTextIcon />}
          clicked={clicked}
          href="/forms"
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
          href="/media-library"
        />
        {chatEnabled?.data?.getSettings?.chatActive && (
          <Item
            name="Messenger"
            icon={<ChatAltIcon />}
            clicked={clicked}
            href="/messenger/chats"
          />
        )}
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
          href="/events/calendar"
        />
        <Item
          name="Favoriten"
          icon={<HeartIcon />}
          clicked={clicked}
          href="/favorites"
        />
        <Item name="Karte" icon={<MapIcon />} clicked={clicked} href="/map" />
        <Item
          name="Einstellungen"
          icon={<CogIcon />}
          clicked={clicked}
          href="/profile"
        />
      </ul>
      {sideBar ? (
        <span
          className="w-full text-center text-white cursor-pointer"
          onClick={() => setSideBar(false)}
        >
          Menu einkippen
        </span>
      ) : (
        <span
          onClick={() => setSideBar(true)}
          className="flex justify-end w-full pr-6 text-white cursor-pointer"
        >
          <ChevronDoubleRightIcon className="w-8" />
        </span>
      )}
    </div>
  );
};

export default SideItems;
