import { useCallback, useEffect } from "react";

import { expireTokenStore } from "../store";
import {
  readAuthToken,
  removeAuthToken,
  writeAuthToken,
} from "../shared/utils";

import { useRefreshTokenMutation } from "../GraphQl/graphql";

export const useExpireToken = (): {
  loading: boolean;
} => {
  const { shouldRefresh } = expireTokenStore();

  const refreshToken = readAuthToken("refreshToken") || "";

  const handleLogout = useCallback(() => {
    removeAuthToken("refreshToken");
    removeAuthToken("accessToken");
  }, []);

  const [refreshTokenMutation, { loading }] = useRefreshTokenMutation({
    onCompleted: ({ refreshToken }) => {
      if (!!refreshToken?.access) {
        writeAuthToken("accessToken", refreshToken?.access);
      }
    },
    onError: () => handleLogout(),
  });

  const handleRefresh = useCallback(() => {
    refreshTokenMutation({ variables: { refreshToken } });
  }, [refreshToken, refreshTokenMutation]);

  useEffect(() => {
    if (shouldRefresh) {
      handleRefresh();
      expireTokenStore.setState({
        shouldRefresh: false,
      });
    }
  }, [handleRefresh, shouldRefresh]);

  return { loading };
};
