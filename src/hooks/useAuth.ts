import { useCallback, useEffect } from "react";

import { useAuthStore } from "../store";
import {
  getSingleJWTField,
  readAuthToken,
  removeAuthToken,
  validateAuthToken,
  writeAuthToken,
} from "../shared/utils";

import { useRefreshTokenMutation } from "../GraphQl/graphql";
import { useNavigate } from "react-router-dom";

export const useAuth = (): {
  loading: boolean;
  handleLogout: () => void;
  handleStoreUser: (token: string) => void;
} => {
  const { loading, addAuth, removeAuth } = useAuthStore();
  const navigate = useNavigate();

  const refreshToken = readAuthToken("refreshToken") || "";
  const accessToken = readAuthToken("accessToken") || "";

  const handleStoreUser = useCallback(
    (token: string) => {
      const fields = getSingleJWTField(token);

      if (!fields?.verified) {
        navigate("/reVerifyEmail");
      }
      if (fields?.verified && !fields?.approved) {
        navigate("/pending-approval");
      }

      addAuth(
        {
          roles: fields?.roles || [],
          scopes: fields?.scopes || [],
          approved: fields?.approved || false,
          verified: fields?.verified || false,
          email: fields?.sub || "",
        },
        true,
        false
      );
    },
    [addAuth, navigate]
  );

  const handleLogout = useCallback(() => {
    removeAuthToken("refreshToken");
    removeAuthToken("accessToken");
    removeAuth();
    addAuth(null, false, false);
  }, [addAuth, removeAuth]);

  const [refreshTokenMutation] = useRefreshTokenMutation({
    onCompleted: ({ refreshToken }) => {
      if (!!refreshToken?.access) {
        writeAuthToken("accessToken", refreshToken?.access);
        handleStoreUser(refreshToken?.access);
      }
    },
    onError: () => handleLogout(),
  });

  const handleRefresh = useCallback(() => {
    refreshTokenMutation({ variables: { refreshToken } });
  }, [refreshToken, refreshTokenMutation]);

  useEffect(() => {
    if (validateAuthToken(refreshToken)) {
      if (!validateAuthToken(accessToken)) {
        handleRefresh();
      } else {
        handleStoreUser(accessToken);
      }
    } else {
      handleLogout();
    }
  }, [
    accessToken,
    refreshToken,
    addAuth,
    handleLogout,
    handleRefresh,
    handleStoreUser,
  ]);

  return { loading, handleLogout, handleStoreUser };
};
