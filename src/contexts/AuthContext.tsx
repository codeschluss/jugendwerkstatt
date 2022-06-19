import { createContext, FunctionComponent, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>();
  const [userRole, setUserRole] = useState<string>("");
  const [passwordBits, setPasswordBits] = useState<number>();
  const [tempEmail, setTempEmail] = useState<number>();

  return (
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        userRole,
        setUserRole,
        passwordBits,
        setPasswordBits,
        tempEmail,
        setTempEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
