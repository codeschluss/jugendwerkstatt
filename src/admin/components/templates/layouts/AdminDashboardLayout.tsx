import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AdminDashboardLayout: FC = ({ children }) => (
  <div className="dashboard-layout">
    {/* Header */}
    <div>Header</div>
    {/* SideNav */}
    <div>Sidenav</div>
    {/* Main Content */}
    <Outlet />
  </div>
);
