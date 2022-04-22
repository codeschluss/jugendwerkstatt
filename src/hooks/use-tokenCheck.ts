import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';

const useTokenCheck = (access: any, refresh: any) => {
  const {setIsLogedIn} = useContext(AuthContext)
  const navigate = useNavigate();
  if (access && refresh) {
    const recievedToken: [string] | any = jwt_decode(access);
    console.log(recievedToken);
    if (recievedToken.roles.includes("approved" || "verified")) {
      console.log("WOOOOOOOOOOORKS");
      localStorage.setItem("accessToken", access || "");
      localStorage.setItem("refreshToken", refresh || "");
      setIsLogedIn(true)
      navigate("/")
    } else {
      return;
    }
  }
};
export default useTokenCheck;
