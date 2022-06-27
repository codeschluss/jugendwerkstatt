// react
import { ReactElement } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

// store
import { useAuthStore } from "../../../store";

export const RequireNonAuthRoute = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <Navigate to={{ pathname: "/" }} state={{ from: location }} />
  ) : (
    <Outlet />
  );
};
