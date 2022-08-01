import { FC } from 'react';
import Header from '../../../../shared/components/header';
export const AdminDashboardLayout: FC = ({ children }) => (
  <div className="dashboard-layout">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="dashboard-content">{children}</main>
  </div>
);
