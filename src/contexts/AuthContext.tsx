import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<string>();
  const [username, setUsername] = useState();
  const [userToken, setuserToken] = useState<boolean>(false);
  const [passwordBits, setPasswordBits] = useState<number>();
  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        username,
        setUsername,
        userToken,
        setuserToken,
        passwordBits,
        setPasswordBits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
