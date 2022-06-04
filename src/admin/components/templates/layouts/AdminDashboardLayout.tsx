import { Outlet } from 'react-router-dom';
import Sidebar from '../../organisms/Sidebar/Sidebar';

export const AdminDashboardLayout = () => (
  <div className="dashboard-layout">
    {/* SideBar */}
    <Sidebar />

    {/* Header */}
    <header className="dashboard-header">Header</header>

    {/* Main Content */}
    <main className="dashboard-content">
      <Outlet />
    </main>
  </div>
);
