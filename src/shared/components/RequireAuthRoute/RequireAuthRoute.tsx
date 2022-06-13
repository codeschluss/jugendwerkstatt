import { ReactElement } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

export const RequireAuthRoute = (): ReactElement => {
  // hooks
  const location = useLocation();
  const { isLogedIn } = useContext(AuthContext);

  console.log("isLogedIn", isLogedIn);

  // return isLogedIn ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to={{ pathname: "/" }} state={{ from: location }} />
  // );

  return <Outlet />;
};
