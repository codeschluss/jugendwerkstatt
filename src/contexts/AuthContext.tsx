import { createContext, FunctionComponent, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>();
  const [userRole, setUserRole] = useState<string>("");
  const [passwordBits, setPasswordBits] = useState<number>();
  const [tempEmail, setTempEmail] = useState<number>();
  const [bgColor, setBgColor] = useState<string>();

  console.log("userRole", userRole);

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
        userRole,
        setUserRole,
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
