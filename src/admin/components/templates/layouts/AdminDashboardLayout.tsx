import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AdminDashboardLayout: FC = ({ children }) => (
  <div className="dashboard-layout">
    <div>Header</div>
    <div>Sidenav</div>
    <Outlet />
  </div>
);
