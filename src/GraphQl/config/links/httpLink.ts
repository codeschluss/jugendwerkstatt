// apollo
import { createHttpLink } from "@apollo/client";

// export link
export const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL + "graphql",
});
