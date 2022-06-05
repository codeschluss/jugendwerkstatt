import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../organisms";

export const AdminDashboardLayout = () => (
  <div className="dashboard-layout">
    {/* SideBar */}
    <Sidebar />

    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="dashboard-content">
      <Outlet />
    </main>
  </div>
);
