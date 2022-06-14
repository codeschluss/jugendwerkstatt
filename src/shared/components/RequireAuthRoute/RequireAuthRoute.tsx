import { ReactElement } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

export const RequireAuthRoute = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { userRole } = useContext(AuthContext);

  // if (userRole === "") return <div>Loading...</div>;

  return !!userRole && userRole !== "Admin" ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname:
          !!userRole && userRole === "Admin" ? "/admin/events" : "/login",
      }}
      state={{ from: location }}
    />
  );
};
