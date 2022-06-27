import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useExpireToken } from "../../../hooks/useExpireToken";
import { AllowedRoles, UserRoleEnum } from "../../../interfaces";

// store
import { useAuthStore } from "../../../store";
import { RequireAuthLayout } from "./RequireAuthLayout";

export const RequireAuthRoute = ({
  accessRole,
}: {
  accessRole: AllowedRoles[];
}): ReactElement => {
  // hooks
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();
  useExpireToken();

  const rolePath = accessRole.includes(UserRoleEnum.STUDENT)
    ? "admin/events"
    : "/";

  const hasAccess = user?.roles.some((role) =>
    accessRole.includes(role as AllowedRoles)
  );

  return isAuthenticated && hasAccess ? (
    <RequireAuthLayout accessRole={accessRole} />
  ) : (
    <Navigate
      to={{ pathname: isAuthenticated ? rolePath : "/" }}
      state={{ from: location }}
    />
  );
};
