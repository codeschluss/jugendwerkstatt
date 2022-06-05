import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminDashboardLayout } from '../admin/components/templates/Layouts/AdminDashboardLayout';
import {
  AdminProfileEmailNotificationsPage,
  AdminProfilePage,
  AdminProfilePasswordPage,
} from '../admin/pages';

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminDashboardLayout />}>
        <Route path="/admin/profile" element={<AdminProfilePage />} />
        <Route
          path="/admin/profile-password"
          element={<AdminProfilePasswordPage />}
        />

        <Route
          path="/admin/email-notifications"
          element={<AdminProfileEmailNotificationsPage />}
        />
      </Route>
      <Route path="*" element={<h1>Page Not Found!</h1>} />
    </Routes>
  </BrowserRouter>
);
