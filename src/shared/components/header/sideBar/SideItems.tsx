import {
  CalendarIcon,
  PaperAirplaneIcon,
  QuestionMarkCircleIcon,
  ChevronDoubleRightIcon,
  MapIcon,
  ChatIcon,
} from "@heroicons/react/outline";
import {
  ChevronDoubleLeftIcon,
  HomeIcon,
  ChatAltIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CogIcon,
  HeartIcon,
  DocumentTextIcon,
  CalendarIcon as CalendarSolid,
} from "@heroicons/react/solid";
import { useContext } from "react";
import Nav from "../../../../admin/components/molecules/Nav/Nav";
import { navItems } from "../../../../admin/static/navItems";
import SideBarContext from "../../../../contexts/SideBarContext";
import {
  useGetChatSettingsQuery,
  useGetGroupsQuery,
} from "../../../../GraphQl/graphql";
import { useAuthStore } from "../../../../store";
import { sidebarStore } from "../../../../store/sidebar/sidebar.store";
import Item from "./Item";

interface SideItemsProps {
  clicked?: () => void;
}

const SideItems: React.FunctionComponent<SideItemsProps> = ({ clicked }) => {
  const { user } = useAuthStore();
  const { sideBar, setSideBar } = useContext(SideBarContext);
  const { handleToggle } = sidebarStore();

  const { isAuthenticated } = useAuthStore();

  const chatEnabled = useGetChatSettingsQuery({
    fetchPolicy: "network-only",
    skip: !isAuthenticated,
  });

  const { data: { groups = null } = {} } = useGetGroupsQuery();

  const mappedGroups =
    groups?.result?.map((group) => ({
      name: group?.name || "",
      location: `groups/${group?.id}/view`,
      items: group?.courses?.map((course) => ({
        name: course?.name,
        location: `courses/${course?.id}`,
      })),
    })) || [];

  const isChatEnabled = chatEnabled.data?.getSettings?.chatActive || false;

  return (
    <div className="flex flex-col justify-between h-full pb-4">
      {!user?.roles.includes("admin") ? (
        <ul>
          <>
            <Item name="Start" icon={<HomeIcon />} clicked={clicked} href="/" />
            <Item
              name="Formulare"
              icon={<DocumentTextIcon />}
              clicked={clicked}
              href="/forms"
            />
            <Item
              name="Events"
              icon={<CalendarSolid />}
              clicked={clicked}
              href="/events"
            />
            <Item
              name="E-Learning"
              icon={<AcademicCapIcon />}
              clicked={clicked}
              href="/media-library"
            />
            {chatEnabled.data?.getSettings?.chatActive && (
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
              name="Kalender"
              icon={<CalendarIcon />}
              clicked={clicked}
              href="calendar"
            />
            <Item
              name="Favoriten"
              icon={<HeartIcon />}
              clicked={clicked}
              href="/favorites"
            />
            <Item
              name="Karte"
              icon={<MapIcon />}
              clicked={clicked}
              href="/map"
            />
            <Item
              name="Einstellungen"
              icon={<CogIcon />}
              clicked={clicked}
              href="/profile"
            />
          </>
        </ul>
      ) : (
        <div className="h-fit overflow-y-scroll scrollbar-hidden">
          <Nav data={navItems(mappedGroups, isChatEnabled)} />
        </div>
      )}
      {sideBar ? (
        <span
          className="w-full mt-10 text-center text-white"
          onClick={() => {
            setSideBar(false);
            handleToggle();
          }}
        >
          <div className="flex items-center justify-center cursor-pointer">
            {" "}
            <ChevronDoubleLeftIcon className="w-5 h-5 mr-2" />
            Menü einklappen
          </div>
        </span>
      ) : (
        <span
          onClick={() => {
            setSideBar(true);
            handleToggle();
          }}
          className="flex justify-end w-full pr-6 text-white"
        >
          <ChevronDoubleRightIcon className="w-8" />
        </span>
      )}
    </div>
  );
};

export default SideItems;
