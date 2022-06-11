import loadable from '@loadable/component';
import { timeout } from 'promise-timeout';
import { PAGE_LOAD_TIMEOUT } from '../config/global';

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages

// Account pages
export const AdminProfilePage = loadable(
  () => timeout(import('./Profile/AdminProfilePage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const AdminProfilePasswordPage = loadable(
  () =>
    timeout(import('./Profile/AdminProfilePasswordPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const AdminProfileEmailNotificationsPage = loadable(
  () =>
    timeout(
      import('./Profile/AdminProfileEmailNotificationsPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

// Events pages
export const EventsListPage = loadable(
  () => timeout(import('./Events/EventsListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateEventsPage = loadable(
  () => timeout(import('./Events/CreateEventsPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const OrganizersListPage = loadable(
  () => timeout(import('./Events/OrganizersListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateOrganizersPage = loadable(
  () => timeout(import('./Events/CreateOrganizersPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CategoriesListPage = loadable(
  () => timeout(import('./Events/CategoriesListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateCategoriesPage = loadable(
  () => timeout(import('./Events/CreateCategoriesPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Vacancy pages
export const VacancyListPage = loadable(
  () => timeout(import('./Vacancy/VacancyListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const CreateVacancyPage = loadable(
  () => timeout(import('./Vacancy/CreateVacancyPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCategoriesListPage = loadable(
  () =>
    timeout(import('./Vacancy/VacancyCategoriesListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCategoriesPage = loadable(
  () =>
    timeout(import('./Vacancy/CreateVacancyCategoriesPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCompaniesListPage = loadable(
  () =>
    timeout(import('./Vacancy/VacancyCompaniesListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCompaniesPage = loadable(
  () =>
    timeout(import('./Vacancy/CreateVacancyCompaniesPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Medias pages
export const MediaListPage = loadable(
  () => timeout(import('./Media/MediaListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateMediaPage = loadable(
  () => timeout(import('./Media/CreateMediaPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const MediaCategoriesListPage = loadable(
  () => timeout(import('./Media/MediaCategoriesListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateMediaCategoriesPage = loadable(
  () => timeout(import('./Media/CreateMediaCategoriesPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// User pages
export const UsersRequestsListPage = loadable(
  () => timeout(import('./User/UsersRequestsListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const UsersListPage = loadable(
  () => timeout(import('./User/UsersListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const EditUserPage = loadable(
  () => timeout(import('./User/EditUserPage'), PAGE_LOAD_TIMEOUT),

  {
    fallback: <PageLoader />,
  }
);

// Forms pages
export const FormsListPage = loadable(
  () => timeout(import('./Forms/FormsListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const FormsDocumentsListPage = loadable(
  () => timeout(import('./Forms/FormsDocumentsListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateFormsPage = loadable(
  () => timeout(import('./Forms/CreateFormsPage'), PAGE_LOAD_TIMEOUT),

  {
    fallback: <PageLoader />,
  }
);

// Groups pages
export const GroupListPage = loadable(
  () => timeout(import('./Group/GroupListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateGroupPage = loadable(
  () => timeout(import('./Group/CreateGroupPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const EditGroupPage = loadable(
  () => timeout(import('./Group/EditGroupPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const GroupParticipantsListPage = loadable(
  () => timeout(import('./Group/GroupParticipantsListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const GroupCourseRatingsListPage = loadable(
  () =>
    timeout(import('./Group/GroupCourseRatingsListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Evaluations pages
export const EvaluationsPage = loadable(
  () => timeout(import('./Evaluations/EvaluationsPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const EvaluationsQuestionsPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationsQuestionsPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

// General Settings
export const PushNotificationsPage = loadable(
  () =>
    timeout(
      import('./GeneralSettings/PushNotificationsPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

export const ChatActivationPage = loadable(
  () =>
    timeout(import('./GeneralSettings/ChatActivationPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const PublicPagesPage = loadable(
  () => timeout(import('./GeneralSettings/PublicPagesPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const GeneralAddressPage = loadable(
  () =>
    timeout(import('./GeneralSettings/GeneralAddressPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
