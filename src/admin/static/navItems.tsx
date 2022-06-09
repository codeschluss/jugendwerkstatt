import { NavModel } from '../interfaces/models/Nav.model';
import {
  BookOpenIcon,
  CalendarIcon,
  CogIcon,
  DocumentTextIcon,
  PlayIcon,
  UserIcon,
  UsersIcon,
  ViewListIcon,
} from '@heroicons/react/solid';

export const navItems: NavModel = {
  items: [
    {
      name: 'Events',
      icon: <CalendarIcon />,
      location: 'events',
      items: [
        {
          name: 'Events',
          location: 'events',
        },
        {
          name: 'Veranstalter',
          location: 'events/organizers',
        },
        {
          name: 'Kategorien',
          location: 'events/categories',
        },
      ],
    },
    {
      name: 'Stellenausschreibungen',
      icon: <BookOpenIcon />,
      items: [
        {
          name: 'Stellenausschreibungen',
          location: 'job-announcements',
        },
        {
          name: 'Kategorien',
          location: 'job-announcements/categories',
        },
        {
          name: 'Unternehmen',
          location: 'job-announcements/companies',
        },
      ],
    },
    {
      name: 'Mediathek',
      icon: <PlayIcon />,
      items: [
        {
          name: 'Inhalte',
          location: 'medias',
        },
        {
          name: 'Kategorien',
          location: 'medias/categories',
        },
      ],
    },
    {
      name: 'Formulare',
      icon: <DocumentTextIcon />,
      location: 'forms',
      items: [
        {
          name: 'Vorlagen',
          location: 'forms/templates',
        },
        {
          name: 'Dokumente',
          location: 'forms/documents',
        },
      ],
    },
    {
      name: 'Gruppen',
      icon: <UsersIcon />,
      items: [
        {
          name: 'Übersicht',
          location: 'groups',
        },
        {
          name: 'Holz',
          items: [
            {
              name: 'Kursbewertung',
              location: 'groups/course-rating',
            },
            {
              name: 'Teilnehmer',
              location: 'groups/participants',
            },
          ],
        },
      ],
    },
    {
      name: 'Evaluierung',
      icon: <ViewListIcon />,
      items: [
        {
          name: 'Auswertung',
          location: 'evaluations',
        },
        {
          name: 'Fragen',
          location: 'evaluations/questions',
        },
      ],
    },
    {
      name: 'Benutzer',
      icon: <UserIcon />,
      items: [
        {
          name: 'Anfragen',
          location: 'users/requests',
        },
        {
          name: 'Benutzer',
          location: 'users',
        },
      ],
    },
    {
      name: 'Allgemein',
      icon: <CogIcon />,
      items: [
        {
          name: 'App',
          items: [
            {
              name: 'Push-Nachrichten',
              location: 'general-settings/push-messages',
            },
            {
              name: 'Chat Aktivierung',
              location: 'general-settings/chat-activation',
            },
          ],
        },
        {
          name: 'Öffentliche Seiten',
          items: [
            { name: 'Startseite' },
            { name: 'Impressum' },
            { name: 'Datenschutz' },
          ],
        },
        {
          name: 'Adressen',
          location: 'general-settings/address',
        },
      ],
    },
  ],
};
