import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { AdminRoutes } from "../../../routes/AdminRoutes";
import { UserRoutes } from "../../../routes/UserRoutes";

export const RequireAuthRoleRoute = () => {
  // hooks
  const { userRole, isLogedIn } = useContext(AuthContext);

  if (userRole === "") return <div>Loading...</div>;

  console.log(
    "userRole",
    userRole === "",
    userRole,
    !!userRole && userRole === "Admin"
  );

  const route =
    !!userRole && userRole === "Admin" ? <AdminRoutes /> : <UserRoutes />;
  console.log("if", !!userRole ? "route" : "Navigate");

  return !!userRole ? route : <Navigate to={{ pathname: "/" }} />;
};
