import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AllowedRoles, UserRoleEnum } from "../../../interfaces";

// store
import { useAuthStore } from "../../../store";
import { RequireAuthLayout } from "./RequireAuthLayout";

export const RequireAuthRoute = ({
  accessRole,
}: {
  accessRole: AllowedRoles;
}): ReactElement => {
  // hooks
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  console.log("auth");

  // if (!user?.verified) {
  //   return (
  //     <Navigate
  //       to={{ pathname: "/reVerifyEmail" }}
  //       state={{ from: location }}
  //     />
  //   );
  // }

  // if (!user?.approved) {
  //   return (
  //     <Navigate
  //       to={{ pathname: "/pending-approval" }}
  //       state={{ from: location }}
  //     />
  //   );
  // }

  const rolePath = accessRole === UserRoleEnum.ADMIN ? "/" : "admin/events";

  return isAuthenticated && user?.roles.includes(accessRole) ? (
    <RequireAuthLayout accessRole={accessRole} />
  ) : (
    <Navigate
      to={{ pathname: isAuthenticated ? rolePath : "/" }}
      state={{ from: location }}
    />
  );
};
