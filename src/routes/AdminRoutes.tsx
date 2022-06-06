import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
} from '../admin/pages';
import CreateGroupPage from '../admin/pages/Group/CreateGroupPage';

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AdminDashboardLayout />}>
        <Route path="/admin/profile" element={<AdminProfilePage />} />
        <Route
          path="/admin/profile-password"
          element={<AdminProfilePasswordPage />}
        />

        <Route
          path="/admin/email-notifications"
          element={<AdminProfileEmailNotificationsPage />}
        />

        <Route path="/admin/events" element={<EventsListPage />} />
        <Route path="/admin/events/new" element={<CreateEventsPage />} />
        <Route
          path="/admin/events/organizers"
          element={<OrganizersListPage />}
        />
        <Route
          path="/admin/events/organizers/new"
          element={<CreateOrganizersPage />}
        />
        <Route
          path="/admin/events/categories"
          element={<CategoriesListPage />}
        />
        <Route
          path="/admin/events/categories/new"
          element={<CreateCategoriesPage />}
        />

        <Route path="/admin/job-announcements" element={<VacancyListPage />} />
        <Route
          path="/admin/job-announcements/new"
          element={<CreateVacancyPage />}
        />
        <Route
          path="/admin/job-announcements/categories"
          element={<VacancyCategoriesListPage />}
        />
        <Route
          path="/admin/job-announcements/categories/new"
          element={<CreateVacancyCategoriesPage />}
        />
        <Route
          path="/admin/job-announcements/companies"
          element={<VacancyCompaniesListPage />}
        />
        <Route
          path="/admin/job-announcements/companies/new"
          element={<CreateVacancyCompaniesPage />}
        />

        <Route path="/admin/medias" element={<MediaListPage />} />
        <Route path="/admin/medias/new" element={<CreateMediaPage />} />
        <Route
          path="/admin/medias/categories"
          element={<MediaCategoriesListPage />}
        />
        <Route
          path="/admin/medias/categories/new"
          element={<CreateMediaCategoriesPage />}
        />

        <Route
          path="/admin/users/requests"
          element={<UsersRequestsListPage />}
        />
        <Route path="/admin/users" element={<UsersListPage />} />
        <Route path="/admin/users/:id" element={<EditUserPage />} />

        <Route path="/admin/forms/templates" element={<FormsListPage />} />
        <Route
          path="/admin/forms/templates/new"
          element={<CreateFormsPage />}
        />
        <Route
          path="/admin/forms/documents"
          element={<FormsDocumentsListPage />}
        />

        <Route path="/admin/groups" element={<GroupListPage />} />
        <Route
          path="/admin/groups/participants"
          element={<GroupParticipantsListPage />}
        />
        <Route path="/admin/groups/new" element={<CreateGroupPage />} />
        <Route path="/admin/groups/:id" element={<EditGroupPage />} />
      </Route>

      <Route path="*" element={<h1>Page Not Found!</h1>} />
    </Routes>
  </BrowserRouter>
);
