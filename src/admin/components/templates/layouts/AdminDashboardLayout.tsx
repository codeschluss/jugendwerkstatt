import { Outlet } from "react-router-dom";
import { Header } from "../../organisms/Header/Header";
import Sidebar from "../../organisms/Sidebar/Sidebar";

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
