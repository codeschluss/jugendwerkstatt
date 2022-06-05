import loadable from '@loadable/component';
import { timeout } from 'promise-timeout';
import { PAGE_LOAD_TIMEOUT } from '../config/global';

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages
export const AdminProfilePage = loadable(
  () => timeout(import('./AdminProfilePage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const AdminProfilePasswordPage = loadable(
  () => timeout(import('./AdminProfilePasswordPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const AdminProfileEmailNotificationsPage = loadable(
  () =>
    timeout(import('./AdminProfileEmailNotificationsPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
