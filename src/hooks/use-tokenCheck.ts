import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const useTokenCheck = (access: any, refresh: any) => {
  const { setIsLogedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  if (access && refresh) {
    const recievedToken: [string] | any = jwt_decode(access);
    if (recievedToken.roles.includes("verified")) {
      localStorage.setItem("accessToken", access || "");
      localStorage.setItem("refreshToken", refresh || "");
      setIsLogedIn(true);
      navigate("/");
    } else {
      navigate("/reVerifyEmail");
      return;
    }
  }
};
export default useTokenCheck;
