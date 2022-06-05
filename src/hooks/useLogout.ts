import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext } from "react";

export const useLogout = () => {
  const { setIsLogedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  localStorage.clear();
  setIsLogedIn(false);
  navigate("/");
};
