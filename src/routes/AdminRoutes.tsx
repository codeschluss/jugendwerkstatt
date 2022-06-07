import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  GeneralAddressForm,
  PublicPagesForm,
} from '../admin/components/organisms';
import { AdminDashboardLayout } from '../admin/components/templates';
import {
  AdminProfileEmailNotificationsPage,
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
  FormsDocumentsListPage,
  FormsListPage,
  GroupListPage,
  EditGroupPage,
  GroupParticipantsListPage,
  PushNotificationsPage,
  ChatActivationPage,
  GeneralAddressPage,
  PublicPagesPage,
} from '../admin/pages';
import CreateGroupPage from '../admin/pages/Group/CreateGroupPage';

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminDashboardLayout />}>
        <Route path="profile" element={<AdminProfilePage />} />
        <Route path="profile-password" element={<AdminProfilePasswordPage />} />
        <Route
          path="email-notifications"
          element={<AdminProfileEmailNotificationsPage />}
        />
        <Route path="events" element={<EventsListPage />} />
        <Route path="events/new" element={<CreateEventsPage />} />
        <Route path="events/organizers" element={<OrganizersListPage />} />
        <Route
          path="events/organizers/new"
          element={<CreateOrganizersPage />}
        />
        <Route path="events/categories" element={<CategoriesListPage />} />
        <Route
          path="events/categories/new"
          element={<CreateCategoriesPage />}
        />
        <Route path="job-announcements" element={<VacancyListPage />} />
        <Route path="job-announcements/new" element={<CreateVacancyPage />} />
        <Route
          path="job-announcements/categories"
          element={<VacancyCategoriesListPage />}
        />
        <Route
          path="job-announcements/categories/new"
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
        <Route path="medias" element={<MediaListPage />} />
        <Route path="medias/new" element={<CreateMediaPage />} />
        <Route path="medias/categories" element={<MediaCategoriesListPage />} />
        <Route
          path="medias/categories/new"
          element={<CreateMediaCategoriesPage />}
        />
        <Route path="users/requests" element={<UsersRequestsListPage />} />
        <Route path="users" element={<UsersListPage />} />
        <Route path="users/:id" element={<EditUserPage />} />
        <Route path="forms/templates" element={<FormsListPage />} />
        <Route path="forms/templates/new" element={<CreateFormsPage />} />
        <Route path="forms/documents" element={<FormsDocumentsListPage />} />
        <Route path="groups" element={<GroupListPage />}>
          <Route path="participants" element={<GroupParticipantsListPage />} />
          <Route path="new" element={<CreateGroupPage />} />
          <Route path=":id" element={<EditGroupPage />} />
        </Route>

        {/* General Settings */}
        <Route path="general-settings">
          <Route
            path="push-notifications"
            element={<PushNotificationsPage />}
          />
          <Route path="chat-activation" element={<ChatActivationPage />} />

          <Route path="address" element={<GeneralAddressPage />} />
          <Route path="address/new" element={<GeneralAddressForm />} />

          <Route path="public-pages" element={<PublicPagesPage />} />
          <Route path="public-pages/new" element={<PublicPagesForm />} />
        </Route>
      </Route>

      <Route path="*" element={<h1>Page Not Found!</h1>} />
    </Routes>
  </BrowserRouter>
);
