import { NavItemModel, NavModel } from "../interfaces/models/Nav.model";
import {
    BookOpenIcon,
    CalendarIcon,
    ChatIcon,
    GlobeAltIcon,
    DocumentTextIcon,
    PlayIcon,
    UserIcon,
    UsersIcon,
    CogIcon,
    ViewListIcon,
} from "@heroicons/react/solid";

export const navItems = (
    groups: Pick<NavItemModel, "name" | "location">[],
    chatEnabled: boolean,
): NavModel => {
    return {
        items: [
            {
                name: "Events",
                icon: <CalendarIcon />,
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
            ...(chatEnabled
                ? [
                      {
                          name: "Messenger",
                          icon: <ChatIcon />,
                          location: "messenger/chats",
                          noItems: true,
                      },
                  ]
                : []),
            {
                name: "Allgemein",
                icon: <GlobeAltIcon />,
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
            {
                name: "Einstellungen",
                icon: <CogIcon />,
                location: "profile",
                noItems: true,
            },
        ],
    };
};
