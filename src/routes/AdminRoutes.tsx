import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDashboardLayout } from "../admin/components/templates";
import {
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
} from "../admin/pages";

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AdminDashboardLayout />}>
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
      </Route>
    </Routes>
  </BrowserRouter>
);
