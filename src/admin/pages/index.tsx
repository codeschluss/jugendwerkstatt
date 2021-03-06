import loadable from '@loadable/component';
import { timeout } from 'promise-timeout';
import { PAGE_LOAD_TIMEOUT } from '../config/global';

// import your loader component
const PageLoader = () => <h1>Loading...</h1>;

//* Export all pages

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

export const FormsUserListPage = loadable(
  () => timeout(import('./Forms/FormsUserListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const CreateUserFormsPage = loadable(
  () => timeout(import('./Forms/CreateUserFormsPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const FormsCategoriesListPage = loadable(
  () => timeout(import('./Forms/FormsCategoriesListPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const CreateFormsCategories = loadable(
  () => timeout(import('./Forms/CreateFormsCategories'), PAGE_LOAD_TIMEOUT),
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

export const GroupCoursesPage = loadable(
  () => timeout(import('./Group/GroupCoursesPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const GroupCourseFormPage = loadable(
  () => timeout(import('./Group/GroupCourseFormPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const GroupPage = loadable(
  () => timeout(import('./Group/GroupPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const GroupFormPage = loadable(
  () => timeout(import('./Group/GroupFormPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Courses pages
export const CourseMembersPage = loadable(
  () => timeout(import('./Group/CourseMembersPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);
export const CreateCourseMembersPage = loadable(
  () => timeout(import('./Group/CreateCourseMembersPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

// Evaluations pages
export const EvaluationQuestionsPage = loadable(
  () =>
    timeout(import('./Evaluations/EvaluationQuestionsPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  }
);

export const EvaluationQuestionViewPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationQuestionViewPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

export const EvaluationQuestionFormPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationQuestionFormPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

export const EvaluationsAssignmentsPage = loadable(
  () =>
    timeout(
      import('./Evaluations/EvaluationsAssignmentsPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

export const CreateEvaluationAssignmentPage = loadable(
  () =>
    timeout(
      import('./Evaluations/CreateEvaluationAssignmentPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);

// General Settings
export const PushMessagesPage = loadable(
  () =>
    timeout(import('./GeneralSettings/PushMessagesPage'), PAGE_LOAD_TIMEOUT),
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

export const CreatePublicPagesPage = loadable(
  () =>
    timeout(
      import('./GeneralSettings/CreatePublicPagesPage'),
      PAGE_LOAD_TIMEOUT
    ),
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

export const EditGeneralAddressPage = loadable(
  () =>
    timeout(
      import('./GeneralSettings/EditGeneralAddressPage'),
      PAGE_LOAD_TIMEOUT
    ),
  {
    fallback: <PageLoader />,
  }
);
