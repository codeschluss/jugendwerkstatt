import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AdminRoutes } from "./AdminRoutes";
import { UserRoutes } from "./UserRoutes";

export const Router = () => {
  // !!INFO , we will take user's role from auth context
  const [userRole] = useState("admin");
  // const { isLogedIn } = useContext(AuthContext);

  const route = userRole === "admin" ? <AdminRoutes /> : <UserRoutes />;

  return <BrowserRouter basename="/">{route}</BrowserRouter>;
};
