import { createContext, useEffect, useState } from "react";

export const TokenStorageContext = createContext<any>(null);

export const TokenStorageProvider: React.FunctionComponent = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>(localStorage.getItem("refreshToken") || "");

  useEffect(() => {
    refreshToken
      ? localStorage.setItem("refreshToken", refreshToken)
      : localStorage.removeItem("refreshToken");
  }, [refreshToken]);

  return (
    <TokenStorageContext.Provider
      value={{
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken
      }}
    >
      {children}
    </TokenStorageContext.Provider>
  );
};

export default TokenStorageContext;
