import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const useTokenCheck = (access: any, refresh: any) => {
  const navigate = useNavigate();
  if (access && refresh) {
    const recievedToken: [string] | any = jwt_decode(access);
    console.log(recievedToken);
    if (recievedToken.roles.includes("approved" || "verified")) {
      console.log("WOOOOOOOOOOORKS");
      localStorage.setItem("accessToken", access || "");
      localStorage.setItem("refreshToken", refresh || "");
    } else {
      return;
    }
  }
};
export default useTokenCheck;
