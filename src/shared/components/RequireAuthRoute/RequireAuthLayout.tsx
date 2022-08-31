// react
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminDashboardLayout } from '../../../admin/components/templates/Layouts/AdminDashboardLayout';
import { AllowedRoles, UserRoleEnum } from '../../../interfaces';

import { UserLayout } from '../UserLayout';

export const RequireAuthLayout = ({
  accessRole,
}: {
  accessRole: AllowedRoles[];
}): ReactElement => {
  const hasAccess = accessRole.some((role) =>
    [UserRoleEnum.ADMIN, UserRoleEnum.SUPERVISOR].includes(role as UserRoleEnum)
  );

  return hasAccess ? (
    <AdminDashboardLayout>
      <Outlet />
    </AdminDashboardLayout>
  ) : (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};
