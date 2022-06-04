import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminEvents } from "../admin/components/organisms/AdminEvents/AdminEvents";
import { AdminDashboardLayout } from "../admin/components/templates/layouts/AdminDashboardLayout";

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminDashboardLayout />}>
        <Route index element={<AdminEvents />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
