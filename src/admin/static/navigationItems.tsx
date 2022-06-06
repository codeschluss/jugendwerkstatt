import {
  BookOpenIcon,
  CalendarIcon,
  CogIcon,
  DocumentTextIcon,
  PlayIcon,
  UserIcon,
  UsersIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import { NavigationItemProps } from '../interfaces/interfaces/NavigationItem.props';

export const navigationItems: NavigationItemProps[] = [
  {
    name: 'Events',
    icon: <CalendarIcon />,
    href: 'events',
    childrens: [
      {
        name: 'Events',
      },
      {
        name: 'Veranstalter',
        href: 'organizers',
      },
      {
        name: 'Kategorien',
        href: 'categories',
      },
    ],
  },
  {
    name: 'Stellenausschreibungen',
    icon: <BookOpenIcon />,
    href: 'job-announcements',
    childrens: [
      {
        name: 'Stellenausschreibungen',
      },
      {
        name: 'Kategorien',
        href: 'categories',
      },
      {
        name: 'Unternehmen',
        href: 'companies',
      },
    ],
  },
  {
    name: 'Mediathek',
    icon: <PlayIcon />,
    href: 'medias',
    childrens: [
      {
        name: 'Inhalte',
      },
      {
        name: 'Kategorien',
        href: 'categories',
      },
    ],
  },
  {
    name: 'Formulare',
    icon: <DocumentTextIcon />,
    href: 'forms',
    childrens: [
      {
        name: 'Vorlagen',
        href: 'templates',
      },
      {
        name: 'Dokumente',
        href: 'documents',
      },
    ],
  },
  {
    name: 'Gruppen',
    icon: <UsersIcon />,
    href: 'groups',
    childrens: [
      {
        name: 'Übersicht',
      },
      {
        name: 'Holz',
        childrens: [
          {
            name: 'Kursbewertung',
            href: 'course-rating',
          },
          {
            name: 'Teilnehmer',
            href: 'participants',
          },
        ],
      },
    ],
  },
  {
    name: 'Evaluierung',
    icon: <ViewListIcon />,
    href: 'evaluations',
    childrens: [
      {
        name: 'Auswertung',
      },
      {
        name: 'Fragen',
        href: 'questions',
      },
    ],
  },
  {
    name: 'Benutzer',
    icon: <UserIcon />,
    href: 'users',
    childrens: [
      {
        name: 'Anfragen',
        href: 'requests',
      },
      {
        name: 'Benutzer',
      },
    ],
  },
  {
    name: 'Allgemein',
    icon: <CogIcon />,
    href: 'general-settings',
  },
];
