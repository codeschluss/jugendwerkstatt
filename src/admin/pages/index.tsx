import loadable from '@loadable/component';
import { timeout } from 'promise-timeout';

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages

// Events pages
export const EventsListPage = loadable(
  () => timeout(import('./Events/EventsListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateEventsPage = loadable(
  () => timeout(import('./Events/CreateEventsPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const OrganizersListPage = loadable(
  () => timeout(import('./Events/OrganizersListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateOrganizersPage = loadable(
  () => timeout(import('./Events/CreateOrganizersPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CategoriesListPage = loadable(
  () => timeout(import('./Events/CategoriesListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateCategoriesPage = loadable(
  () => timeout(import('./Events/CreateCategoriesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

// Vacancy pages
export const VacancyListPage = loadable(
  () => timeout(import('./Vacancy/VacancyListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);
export const CreateVacancyPage = loadable(
  () => timeout(import('./Vacancy/CreateVacancyPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCategoriesListPage = loadable(
  () =>
    timeout(import('./Vacancy/VacancyCategoriesListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCategoriesPage = loadable(
  () =>
    timeout(import('./Vacancy/CreateVacancyCategoriesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const VacancyCompaniesListPage = loadable(
  () =>
    timeout(import('./Vacancy/VacancyCompaniesListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateVacancyCompaniesPage = loadable(
  () =>
    timeout(import('./Vacancy/CreateVacancyCompaniesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

// Medias pages
export const MediaListPage = loadable(
  () => timeout(import('./Media/MediaListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateMediaPage = loadable(
  () => timeout(import('./Media/CreateMediaPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const MediaCategoriesListPage = loadable(
  () => timeout(import('./Media/MediaCategoriesListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateMediaCategoriesPage = loadable(
  () => timeout(import('./Media/CreateMediaCategoriesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

// User pages
export const UsersRequestsListPage = loadable(
  () => timeout(import('./User/UsersRequestsListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const UsersListPage = loadable(
  () => timeout(import('./User/UsersListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const EditUserPage = loadable(
  () => timeout(import('./User/EditUserPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),

  {
    fallback: <PageLoader />,
  }
);

// Forms pages
export const FormsListPage = loadable(
  () => timeout(import('./Forms/FormsListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const FormsUserListPage = loadable(
  () => timeout(import('./Forms/FormsUserListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);
export const CreateUserFormsPage = loadable(
  () => timeout(import('./Forms/CreateUserFormsPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);
export const FormsCategoriesListPage = loadable(
  () => timeout(import('./Forms/FormsCategoriesListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);
export const CreateFormsCategories = loadable(
  () => timeout(import('./Forms/CreateFormsCategories'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreateFormsPage = loadable(
  () => timeout(import('./Forms/CreateFormsPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),

  {
    fallback: <PageLoader />,
  }
);

// Groups pages
export const GroupListPage = loadable(
  () => timeout(import('./Group/GroupListPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const GroupCoursesPage = loadable(
  () => timeout(import('./Group/GroupCoursesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const GroupCourseFormPage = loadable(
  () => timeout(import('./Group/GroupCourseFormPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const GroupPage = loadable(
  () => timeout(import('./Group/GroupPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const GroupFormPage = loadable(
  () => timeout(import('./Group/GroupFormPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

// Courses pages
export const CourseMembersPage = loadable(
  () => timeout(import('./Group/CourseMembersPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);
export const CreateCourseMembersPage = loadable(
  () => timeout(import('./Group/CreateCourseMembersPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

// Evaluations pages
export const EvaluationQuestionsPage = loadable(
  () =>
    timeout(import('./Evaluations/EvaluationQuestionsPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const EvaluationQuestionViewPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationQuestionViewPage'),
      Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)
    ),
  {
    fallback: <PageLoader />,
  }
);

export const EvaluationQuestionFormPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationQuestionFormPage'),
      Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)
    ),
  {
    fallback: <PageLoader />,
  }
);

export const EvaluationsAssignmentsPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationsAssignmentsPage'),
      Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)
    ),
  {
    fallback: <PageLoader />,
  }
);

export const CreateEvaluationAssignmentPage = loadable(
  () =>
    timeout(
      import('./Evaluations/CreateEvaluationAssignmentPage'),
      Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)
    ),
  {
    fallback: <PageLoader />,
  }
);

// General Settings
export const PushMessagesPage = loadable(
  () =>
    timeout(import('./GeneralSettings/PushMessagesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const ChatActivationPage = loadable(
  () =>
    timeout(import('./GeneralSettings/ChatActivationPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const PublicPagesPage = loadable(
  () => timeout(import('./GeneralSettings/PublicPagesPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const CreatePublicPagesPage = loadable(
  () =>
    timeout(
      import('./GeneralSettings/CreatePublicPagesPage'),
      Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)
    ),
  {
    fallback: <PageLoader />,
  }
);

export const GeneralAddressPage = loadable(
  () =>
    timeout(import('./GeneralSettings/GeneralAddressPage'), Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)),
  {
    fallback: <PageLoader />,
  }
);

export const EditGeneralAddressPage = loadable(
  () =>
    timeout(
      import('./GeneralSettings/EditGeneralAddressPage'),
      Number(process.env.REACT_APP_PAGE_LOAD_TIMEOUT)
    ),
  {
    fallback: <PageLoader />,
  }
);
