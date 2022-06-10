import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useRefreshTokenMutation } from "../GraphQl/graphql";

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>();
  const [username, setUsername] = useState();
  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();
  const [passwordBits, setPasswordBits] = useState<number>();
  const [tempEmail, setTempEmail] = useState<number>();
  const [bgColor, setBgColor] = useState<string>();

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      refresh();
    }
  }, []);

  useEffect(() => {
    refreshAccessToken();
  }, [accessToken]);

  const refreshAccessToken = () => {
    if (!accessToken) {
      return;
    } else {
      setTimeout(() => {
        refresh(); 
      }, jwtDecode<any>(accessToken).exp * 1000 - Date.now());
    }
  };

  const [refreshTokenMutation] = useRefreshTokenMutation();
  
  const refresh = () => {
    refreshTokenMutation({
      variables: {
        refreshToken: localStorage.getItem("refreshToken") || "",
      },
    }).then(tokens => {
      localStorage.setItem("accessToken", tokens.data?.refreshToken?.access || "");
      localStorage.setItem("refreshToken", tokens.data?.refreshToken?.refresh || "");
      setAccessToken(tokens.data?.refreshToken?.access || "");
      setRefreshToken(tokens.data?.refreshToken?.access || "");
      setIsLogedIn(true);
    });
  }

  const colors = [
    "bg-green-600",
    "bg-purple-600",
    "bg-red-500",
    "bg-blue-600",
    "bg-yellow-400",
  ];

  useEffect(() => {
    const idx = Math.floor(Math.random() * 5);
    setBgColor(colors[idx]);
  });

  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        username,
        setUsername,
        accessToken,
        setAccessToken,
        passwordBits,
        setPasswordBits,
        tempEmail,
        setTempEmail,
        bgColor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
