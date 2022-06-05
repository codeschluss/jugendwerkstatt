import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Register from "../../components/register";
import AuthContext from "../../../contexts/AuthContext";

const RegisterPage = () => {
  const { isLogedIn } = useContext(AuthContext);
  return isLogedIn ? <Navigate to="/" replace /> : <Register />;
};

export default RegisterPage;
