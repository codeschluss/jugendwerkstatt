import { Outlet } from 'react-router-dom';
import Header from '../../../../shared/components/header';
import { Sidebar } from '../../organisms';

export const AdminDashboardLayout = () => (
  <div className="dashboard-layout">
    {/* SideBar */}
    <Sidebar />

    {/* Header */}
    <Header adminHeader />

    {/* Main Content */}
    <main className="dashboard-content">
      <Outlet />
    </main>
  </div>
);
