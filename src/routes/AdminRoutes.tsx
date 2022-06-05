import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDashboardLayout } from "../admin/components/templates";
import {
  EventsListPage,
  CreateEventsPage,
  OrganizersListPage,
  CreateOrganizersPage,
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
      </Route>
    </Routes>
  </BrowserRouter>
);
