import { ReactElement, useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

export const RequireNonAuthRoute = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { isLogedIn } = useContext(AuthContext);

  return isLogedIn ? (
    <Navigate to={{ pathname: "/" }} state={{ from: location }} />
  ) : (
    <Outlet />
  );
};
