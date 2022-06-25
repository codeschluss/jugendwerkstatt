// react
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { AdminDashboardLayout } from "../../../admin/components/templates";
import { AllowedRoles, UserRoleEnum } from "../../../interfaces";

import { UserLayout } from "../UserLayout";

export const RequireAuthLayout = ({
  accessRole,
}: {
  accessRole: AllowedRoles;
}): ReactElement => {
  return accessRole === UserRoleEnum.ADMIN ? (
    <AdminDashboardLayout>
      <Outlet />
    </AdminDashboardLayout>
  ) : (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};
