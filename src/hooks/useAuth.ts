import { default as jwt_decode } from "jwt-decode";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import FeedbackContext, { FeedbackType } from "../contexts/FeedbackContext";
import TokenStorageContext from "../contexts/TokenStorageContext";
import {
  TokenDto,
  useCreateTokenMutation,
  useRefreshTokenMutation
} from "../GraphQl/graphql";

export const useAuth = () => {
  const navigate = useNavigate();

  const { setAccessToken, refreshToken, setRefreshToken } =
    useContext(TokenStorageContext);

  const { setIsLogedIn } = useContext(AuthContext);
  const { setFeedback } = useContext(FeedbackContext);

  const [accessTimer, setAccessTimer] = useState<any>(null);
  const [refreshTimer, setRefreshTimer] = useState<any>(null);

  const init = () => {
    refreshToken && expiration(refreshToken) > 0 ? refresh() : logout();
  };

  const [refreshTokenMutation] = useRefreshTokenMutation();
  const refresh = () => {
    if (refreshToken) {
      refreshTokenMutation({
        variables: {
          refreshToken: refreshToken || "",
        },
      }).then((response) => {
        store(response.data?.refreshToken);
        timers(response.data?.refreshToken);
      });
    }
  };

  const [createToken] = useCreateTokenMutation();
  const handleLogin = (email: string, password: string) => {
    createToken({
      variables: {
        username: email,
        password: password,
      },
    })
      .then((response) => {
        // response.errors ? setHasError(true) : setHasError(false);
        const recievedToken: [string] | any = jwt_decode(
          response.data?.createToken?.access || ""
        );
        if (!recievedToken.verified) {
          navigate("/reVerifyEmail");
          return;
        }

        //TODO: pending approved view
        if (!recievedToken.approved) {
          navigate("/pending-approval");
          return;
        }

        store(response.data?.createToken);
        timers(response.data?.createToken);
        setFeedback({
          type: FeedbackType.Success,
          message: "Erolgreich eingeloggt"
        });
        navigate("/");
      });
  };

  const store = (token: TokenDto | null | undefined) => {
    if (token) {
      setAccessToken(token.access);
      setRefreshToken(token.refresh);
      setIsLogedIn(true);
    }
  };

  const timers = (token: TokenDto | null | undefined) => {
    if (token) {
      accessTimer && clearTimeout(accessTimer);
      refreshTimer && clearTimeout(refreshTimer);
      setAccessTimer(setTimeout(() => refresh(), expiration(token.access!)));
      setRefreshTimer(setTimeout(() => logout(), expiration(token.refresh!)));
    }
  };

  const expiration = (token: string): number => {
    const decoded = JSON.parse(atob(token.split(".")[1]));
    return decoded.exp * 1000 - Date.now();
  };

  const logout = () => {
    accessTimer && clearTimeout(accessTimer);
    refreshTimer && clearTimeout(refreshTimer);
    setAccessToken(null);
    setRefreshToken(null);
    setIsLogedIn(false);
    navigate("/");
  };

  return {
    handleLogin,
    init,
    logout
  };
};

export default useAuth;
