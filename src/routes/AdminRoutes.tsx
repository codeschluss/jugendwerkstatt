import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  GeneralAddressForm,
  PublicPagesForm,
} from '../admin/components/organisms';
import { AdminDashboardLayout } from '../admin/components/templates';
import {
  AdminProfilePage,
  AdminProfilePasswordPage,
  EventsListPage,
  CreateEventsPage,
  OrganizersListPage,
  CreateOrganizersPage,
  CategoriesListPage,
  CreateCategoriesPage,
  VacancyListPage,
  CreateVacancyPage,
  VacancyCategoriesListPage,
  CreateVacancyCategoriesPage,
  VacancyCompaniesListPage,
  CreateVacancyCompaniesPage,
  MediaListPage,
  CreateMediaPage,
  MediaCategoriesListPage,
  CreateMediaCategoriesPage,
  UsersListPage,
  UsersRequestsListPage,
  EditUserPage,
  CreateFormsPage,
  FormsUserListPage,
  FormsListPage,
  GroupListPage,
  CreateGroupPage,
  EditGroupPage,
  PushMessagesPage,
  ChatActivationPage,
  GeneralAddressPage,
  PublicPagesPage,
  EvaluationsPage,
  EvaluationsQuestionsPage,
  FormsCategoriesListPage,
  CreateFormsCategories,
  GroupCoursesPage,
  GroupMembersPage,
  CreateGroupMembersPage,
  EditGeneralAddressPage,
} from '../admin/pages';

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminDashboardLayout />}>
        <Route path="profile" element={<AdminProfilePage />} />
        <Route path="profile-password" element={<AdminProfilePasswordPage />} />

        <Route path="events" element={<EventsListPage />} />
        <Route path="events/new" element={<CreateEventsPage />} />
        <Route path="events/:id" element={<CreateEventsPage />} />
        <Route path="events/organizers" element={<OrganizersListPage />} />
        <Route
          path="events/organizers/new"
          element={<CreateOrganizersPage />}
        />
        <Route
          path="events/organizers/:id"
          element={<CreateOrganizersPage />}
        />
        <Route path="events/categories" element={<CategoriesListPage />} />
        <Route
          path="events/categories/new"
          element={<CreateCategoriesPage />}
        />
        <Route
          path="events/categories/:id"
          element={<CreateCategoriesPage />}
        />
        <Route path="job-announcements" element={<VacancyListPage />} />
        <Route path="job-announcements/new" element={<CreateVacancyPage />} />
        <Route path="job-announcements/:id" element={<CreateVacancyPage />} />
        <Route
          path="job-announcements/categories"
          element={<VacancyCategoriesListPage />}
        />
        <Route
          path="job-announcements/categories/new"
          element={<CreateVacancyCategoriesPage />}
        />
        <Route
          path="job-announcements/categories/:id"
          element={<CreateVacancyCategoriesPage />}
        />
        <Route
          path="job-announcements/companies"
          element={<VacancyCompaniesListPage />}
        />
        <Route
          path="job-announcements/companies/new"
          element={<CreateVacancyCompaniesPage />}
        />
        <Route
          path="job-announcements/companies/:id"
          element={<CreateVacancyCompaniesPage />}
        />
        <Route path="medias" element={<MediaListPage />} />
        <Route path="medias/new" element={<CreateMediaPage />} />
        <Route path="medias/:id" element={<CreateMediaPage />} />
        <Route path="medias/categories" element={<MediaCategoriesListPage />} />
        <Route
          path="medias/categories/new"
          element={<CreateMediaCategoriesPage />}
        />
        <Route
          path="medias/categories/:id"
          element={<CreateMediaCategoriesPage />}
        />
        <Route path="users/requests" element={<UsersRequestsListPage />} />

        <Route path="users" element={<UsersListPage />} />
        <Route path="users/requests" element={<UsersRequestsListPage />} />
        <Route path="users/:id" element={<EditUserPage />} />

        <Route path="forms/templates" element={<FormsListPage />} />
        <Route path="forms/templates/new" element={<CreateFormsPage />} />
        <Route path="forms/templates/:id" element={<CreateFormsPage />} />
        <Route path="forms/user-templates" element={<FormsUserListPage />} />
        <Route
          path="forms/user-templates/new"
          element={<FormsUserListPage />}
        />
        <Route
          path="forms/user-templates/:id"
          element={<FormsUserListPage />}
        />

        <Route path="forms/categories" element={<FormsCategoriesListPage />} />
        <Route
          path="forms/categories/new"
          element={<CreateFormsCategories />}
        />
        <Route
          path="forms/categories/:id"
          element={<CreateFormsCategories />}
        />

        <Route path="evaluations" element={<EvaluationsPage />} />
        <Route
          path="evaluations/questions"
          element={<EvaluationsQuestionsPage />}
        />

        <Route path="groups" element={<GroupListPage />} />
        <Route path="groups/new" element={<CreateGroupPage />} />
        <Route path="groups/:id/members" element={<GroupMembersPage />} />
        <Route
          path="groups/:id/members/new"
          element={<CreateGroupMembersPage />}
        />
        <Route path="groups/:id/courses" element={<GroupCoursesPage />} />
        <Route path="groups/:id/edit" element={<EditGroupPage />} />

        {/* General Settings */}
        <Route
          path="general-settings/push-messages"
          element={<PushMessagesPage />}
        />
        <Route
          path="general-settings/chat-activation"
          element={<ChatActivationPage />}
        />

        <Route
          path="general-settings/addresses"
          element={<GeneralAddressPage />}
        />
        <Route
          path="general-settings/addresses/:id"
          element={<EditGeneralAddressPage />}
        />
        <Route
          path="general-settings/addresses/new"
          element={<GeneralAddressForm />}
        />

        <Route
          path="general-settings/public-pages"
          element={<PublicPagesPage />}
        />
        <Route
          path="general-settings/public-pages/new"
          element={<PublicPagesForm />}
        />
      </Route>

      <Route path="*" element={<h1>Page Not Found!</h1>} />
    </Routes>
  </BrowserRouter>
);
