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
  () => timeout(import("./Vacancy/VacancyListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const CreateVacancyPage = loadable(
  () => timeout(import("./Vacancy/CreateVacancyPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCategoriesListPage = loadable(
  () =>
    timeout(import("./Vacancy/VacancyCategoriesListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCategoriesPage = loadable(
  () =>
    timeout(import("./Vacancy/CreateVacancyCategoriesPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCompaniesListPage = loadable(
  () =>
    timeout(import("./Vacancy/VacancyCompaniesListPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCompaniesPage = loadable(
  () =>
    timeout(import("./Vacancy/CreateVacancyCompaniesPage"), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
