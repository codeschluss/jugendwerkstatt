// react
import { ReactElement } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { UserLayout } from "../UserLayout";

// store
import { useAuthStore } from "../../../store";

export const StandardNonAuthLayout = (): ReactElement => {
  // hooks

  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};
