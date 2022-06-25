// react
import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserRoleEnum } from "../../../interfaces";

// store
import { useAuthStore } from "../../../store";
import { RequireAuthLayout } from "./RequireAuthLayout";

export const RequireAuthAll = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  return isAuthenticated ? (
    <RequireAuthLayout
      accessRole={
        user?.roles.includes(UserRoleEnum.ADMIN) ? "admin" : "student"
      }
    />
  ) : (
    <Navigate to={{ pathname: "/" }} state={{ from: location }} />
  );
};
