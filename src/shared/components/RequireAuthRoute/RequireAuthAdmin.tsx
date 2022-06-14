import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";

export const RequireAuthAdmin = () => {
  // hooks
  const location = useLocation();
  const { userRole, isLogedIn } = useContext(AuthContext);

  // if (userRole === "") return <div>Loading...</div>;

  return !!userRole && userRole === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate
      to={{ pathname: isLogedIn ? "/" : "/login" }}
      state={{ from: location }}
    />
  );
};
