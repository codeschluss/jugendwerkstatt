// apollo
import { createHttpLink } from "@apollo/client";

// config
import { API_URL } from "../../../config/app";

// export link
export const httpLink = createHttpLink({
  uri: API_URL + "graphql",
});
