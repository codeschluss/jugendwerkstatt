import { ReactElement } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

// store
import { useAuthStore } from "../../../store";

export const RequireAuthRoute = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  console.log("auth", user, isAuthenticated);

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

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login" }} state={{ from: location }} />
  );
};
