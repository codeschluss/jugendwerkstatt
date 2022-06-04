import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDashboardLayout } from "../admin/components/templates";
import { AdminEventsPage } from "../admin/pages";

export const AdminRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AdminDashboardLayout />}>
        <Route path="/admin/events" element={<AdminEventsPage />} />
        <Route path="/admin/events/organizers" element={<div>hello</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
