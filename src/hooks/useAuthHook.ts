import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TokenStorageContext from "../contexts/TokenStorageContext";
import { useCreateTokenMutation } from "../GraphQl/graphql";

export const useAuth = () => {
  const {
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken
  } = useContext(TokenStorageContext);
  

  const [createToken] = useCreateTokenMutation();
  const handleLogin = (email: string, password: string) => {
    createToken({
      variables: {
        username: email,
        password: password
      },
    }).then()
    )
  };

  
  const navigate = useNavigate();

  localStorage.clear();
  setIsLogedIn(false);
  navigate("/");
};
