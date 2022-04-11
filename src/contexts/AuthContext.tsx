import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<string>();
  const [username, setUsername] = useState();
  const [userToken, setuserToken] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        username,
        setUsername,
        userToken,
        setuserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
