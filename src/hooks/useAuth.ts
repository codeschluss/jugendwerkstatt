import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenStorageContext from "../contexts/TokenStorageContext";
import {
  useCreateTokenMutation,
  useGetMeBasicQuery,
  useRefreshTokenMutation,
} from "../GraphQl/graphql";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";

export const useAuth = () => {
  const navigate = useNavigate();

  const { accessToken, setAccessToken, refreshToken, setRefreshToken } =
    useContext(TokenStorageContext);
  const { setIsLogedIn } = useContext(AuthContext);

  const [createToken] = useCreateTokenMutation();
  const [refreshTokenMutation] = useRefreshTokenMutation();

  const handleLogin = (email: string, password: string) => {
    createToken({
      variables: {
        username: email,
        password: password,
      },
    }).then((response) => {
      const recievedToken: [string] | any = jwt_decode(
        response.data?.createToken?.access || ""
      );
      if (recievedToken.roles.includes("verified")) {
        localStorage.setItem(
          "accessToken",
          response.data?.createToken?.access || ""
        );
        localStorage.setItem(
          "refreshToken",
          response.data?.createToken?.refresh || ""
        );
        setAccessToken(response.data?.createToken?.access);
        setRefreshToken(response.data?.createToken?.refresh);
        setIsLogedIn(true);
        navigate("/");
      } else {
        navigate("/reVerifyEmail");
        return;
      }
    });
  };

  const authOnInit = () => {
    const refresh = () => {
      refreshTokenMutation({
        variables: {
          refreshToken: localStorage.getItem("refreshToken") || "",
        },
      }).then((tokens) => {
        localStorage.setItem(
          "accessToken",
          tokens.data?.refreshToken?.access || ""
        );
        localStorage.setItem(
          "refreshToken",
          tokens.data?.refreshToken?.refresh || ""
        );
        setAccessToken(tokens.data?.refreshToken?.access || "");
        setRefreshToken(tokens.data?.refreshToken?.access || "");
        setIsLogedIn(true);
      });
    };

    const refreshAccessToken = () => {
      if (!accessToken) {
        return;
      } else {
        setTimeout(() => {
          refresh();
        }, jwtDecode<any>(accessToken).exp * 1000 - Date.now());
      }
    };

    if (localStorage.getItem("refreshToken")) {
      refresh();
    }

    refreshAccessToken();
  };

  // localStorage.clear();
  // setIsLogedIn(false);
  // navigate("/");
  return {
    handleLogin,
    authOnInit,
  };
};

export default useAuth;
