import React, { Children, Fragment } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ Children }: any) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [username, setUsername] = useState();

  return;
  <Fragment>
    <AuthContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        username,
        setUsername,
      }}
    >
      {Children}
    </AuthContext.Provider>
    ;
  </Fragment>;
};

export default AuthContext;
