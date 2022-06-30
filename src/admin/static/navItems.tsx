import { NavItemModel, NavModel } from "../interfaces/models/Nav.model";
import {
  BookOpenIcon,
  CalendarIcon,
  ChatIcon,
  CogIcon,
  DocumentTextIcon,
  PlayIcon,
  UserIcon,
  UsersIcon,
  ViewListIcon,
} from "@heroicons/react/solid";

export const navItems = (
  groups: Pick<NavItemModel, "name" | "location">[]
): NavModel => {
  return {
    items: [
      {
        name: "Events",
        icon: <CalendarIcon />,
        location: "events",
        items: [
          {
            name: "Events",
            location: "events",
          },
          {
            name: "Veranstalter",
            location: "events/organizers",
          },
          {
            name: "Kategorien",
            location: "events/categories",
          },
        ],
      },
      {
        name: "Stellenausschreibungen",
        icon: <BookOpenIcon />,
        location: "job-announcements",
        items: [
          {
            name: "Stellenausschreibungen",
            location: "job-announcements",
          },
          {
            name: "Kategorien",
            location: "job-announcements/categories",
          },
          {
            name: "Unternehmen",
            location: "job-announcements/companies",
          },
        ],
      },
      {
        name: "Mediathek",
        icon: <PlayIcon />,
        location: "medias",
        items: [
          {
            name: "Inhalte",
            location: "medias",
          },
          {
            name: "Kategorien",
            location: "medias/categories",
          },
        ],
      },
      {
        name: "Formulare",
        icon: <DocumentTextIcon />,
        location: "forms",
        items: [
          {
            name: "Vorlagen",
            location: "forms/templates",
          },
          {
            name: "Kategorien",
            location: "forms/categories",
          },
          {
            name: "Benutzerformulare",
            location: "forms/user-templates",
          },
        ],
      },
      {
        name: "Gruppen",
        icon: <UsersIcon />,
        location: "groups",
        items: [
          {
            name: "Übersicht",
            location: "groups",
          },
          ...(groups && groups),
        ],
      },
      {
        name: "Evaluierung",
        icon: <ViewListIcon />,
        location: "evaluations",
        items: [
          {
            name: "Evaluierungsbögen",
            location: "evaluations/questions",
          },
          {
            name: "Zuordnungen",
            location: "evaluations/assignments",
          },
        ],
      },
      {
        name: "Benutzer",
        icon: <UserIcon />,
        location: "users",
        items: [
          {
            name: "Anfragen",
            location: "users/requests",
          },
          {
            name: "Benutzer",
            location: "users",
          },
        ],
      },
      {
        name: "Messenger",
        icon: <ChatIcon />,
        location: "messenger/chats",
        noItems: true,
      },
      {
        name: "Allgemein",
        icon: <CogIcon />,
        location: "general-settings",
        items: [
          {
            name: "App",
            items: [
              {
                name: "Push-Nachrichten",
                location: "general-settings/push-messages",
              },
              {
                name: "Chat Aktivierung",
                location: "general-settings/chat-activation",
              },
            ],
          },
          {
            name: "Öffentliche Seiten",
            location: "general-settings/public-pages",
          },
          {
            name: "Adressen",
            location: "general-settings/addresses",
          },
        ],
      },
    ],
  };
};
