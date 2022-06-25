import { FC } from "react";
import Header from "../../../../shared/components/header";
import { Sidebar } from "../../organisms";

export const AdminDashboardLayout: FC = ({ children }) => (
  <div className="dashboard-layout">
    {/* SideBar */}
    <Sidebar />

    {/* Header */}
    <Header adminHeader />

    {/* Main Content */}
    <main className="dashboard-content">{children}</main>
  </div>
);
