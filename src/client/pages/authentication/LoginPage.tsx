import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../../shared/components/authentication/login";
import AuthContext from "../../../contexts/AuthContext";

const LoginPage = () => {
  const { isLogedIn } = useContext(AuthContext);
  return isLogedIn ? <Navigate to="/" replace /> : <Login />;
};

export default LoginPage;
