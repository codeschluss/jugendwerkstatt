import loadable from "@loadable/component";
import { timeout } from "promise-timeout";
import { PAGE_LOAD_TIMEOUT } from "../config/global";

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages

// Events pages
export const EventsListPage = loadable(
  () => timeout(import("./events/EventsListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateEventsPage = loadable(
  () => timeout(import("./events/CreateEventsPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const OrganizersListPage = loadable(
  () => timeout(import("./events/OrganizersListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateOrganizersPage = loadable(
  () => timeout(import("./events/CreateOrganizersPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CategoriesListPage = loadable(
  () => timeout(import("./events/CategoriesListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateCategoriesPage = loadable(
  () => timeout(import("./events/CreateCategoriesPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Vacancy pages
export const VacancyListPage = loadable(
  () => timeout(import("./vacancy/VacancyListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const CreateVacancyPage = loadable(
  () => timeout(import("./vacancy/CreateVacancyPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCategoriesListPage = loadable(
  () =>
    timeout(import("./vacancy/VacancyCategoriesListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCategoriesPage = loadable(
  () =>
    timeout(import("./vacancy/CreateVacancyCategoriesPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCompaniesListPage = loadable(
  () =>
    timeout(import("./vacancy/VacancyCompaniesListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCompaniesPage = loadable(
  () =>
    timeout(import("./vacancy/CreateVacancyCompaniesPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Medias pages
export const MediaListPage = loadable(
  () => timeout(import("./media/MediaListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateMediaPage = loadable(
  () => timeout(import("./media/CreateMediaPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const MediaCategoriesListPage = loadable(
  () => timeout(import("./media/MediaCategoriesListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateMediaCategoriesPage = loadable(
  () => timeout(import("./media/CreateMediaCategoriesPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// User pages
export const UsersRequestsListPage = loadable(
  () => timeout(import("./user/UsersRequestsListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const UsersListPage = loadable(
  () => timeout(import("./user/UsersListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const EditUserPage = loadable(
  () => timeout(import("./user/EditUserPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
