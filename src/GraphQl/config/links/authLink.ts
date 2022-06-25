// apollo
import { setContext } from "@apollo/client/link/context";

// utils
import { readAuthToken, validateAuthToken } from "../../../shared/utils";

export const authLink = setContext((_, { headers }) => {
  // fetch token from storage here
  const token = readAuthToken("accessToken");

  // validate token here
  if (token && validateAuthToken(token)) {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return headers;
});
