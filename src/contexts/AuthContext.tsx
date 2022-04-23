import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<string>();
  const [theUser, setTheUser] = useState("");
  const [username, setUsername] = useState();
  const [userToken, setUserToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();
  const [passwordBits, setPasswordBits] = useState<number>();
  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        theUser,
        setTheUser,
        username,
        setUsername,
        userToken,
        setUserToken,
        refreshToken,
        setRefreshToken,
        passwordBits,
        setPasswordBits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
