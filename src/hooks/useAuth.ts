import { default as jwt_decode } from 'jwt-decode';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import FeedbackContext, { FeedbackType } from '../contexts/FeedbackContext';
import TokenStorageContext from '../contexts/TokenStorageContext';
import {
  TokenDto,
  useCreateTokenMutation,
  useRefreshTokenMutation,
} from '../GraphQl/graphql';

export const useAuth = () => {
  const navigate = useNavigate();

  const { setAccessToken, refreshToken, setRefreshToken } =
    useContext(TokenStorageContext);

  const { setIsLogedIn } = useContext(AuthContext);
  const { setFeedback } = useContext(FeedbackContext);

  const init = () => {
    refreshToken && expiration(refreshToken) > 0 ? refresh() : logout();
  };

  const expiration = (token: string): number => {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded.exp * 1000 - Date.now();
  };

  const [refreshTokenMutation] = useRefreshTokenMutation();
  const refresh = () => {
    if (refreshToken) {
      refreshTokenMutation({
        variables: {
          refreshToken: refreshToken || '',
        },
      }).then((response) => store(response.data?.refreshToken));
    }
  };

  const [createToken] = useCreateTokenMutation();
  const handleLogin = (email: string, password: string) => {
    createToken({
      variables: {
        username: email,
        password: password,
      },
    }).then((response) => {
      const recievedToken: [string] | any = jwt_decode(
        response.data?.createToken?.access || ''
      );
      if (!recievedToken.verified) {
        navigate('/reVerifyEmail');
        return;
      }

      //TODO: pending approved view
      if (!recievedToken.approved) {
        navigate('/pending-approval');
        return;
      }

      store(response.data?.createToken);
      setFeedback({
        type: FeedbackType.Success,
        message: 'Erolgreich eingeloggt',
      });
      navigate('/');
    });
  };

  const store = (token: TokenDto | null | undefined) => {
    if (token) {
      setAccessToken(token.access);
      setRefreshToken(token.refresh);
      setIsLogedIn(true);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setIsLogedIn(false);
    navigate('/');
  };

  return {
    handleLogin,
    init,
    logout,
  };
};

export default useAuth;
