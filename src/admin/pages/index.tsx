import loadable from "@loadable/component";
import { timeout } from "promise-timeout";
import { PAGE_LOAD_TIMEOUT } from "../config/global";

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages
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
