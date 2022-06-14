import { ReactElement, useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

export const RequireNonAuthRoute = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { userRole, isLogedIn } = useContext(AuthContext);

  // if (userRole === "") return <div>Loading...</div>;

  return isLogedIn ? (
    <Navigate
      to={{
        pathname: !!userRole && userRole === "Admin" ? "/admin/events" : "/",
      }}
      state={{ from: location }}
    />
  ) : (
    <Outlet />
  );
};
