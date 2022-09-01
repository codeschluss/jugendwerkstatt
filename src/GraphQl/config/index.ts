// apollo
import { ApolloClient, from } from "@apollo/client";

// cache
import { cache } from "./cache";

// links
import { links } from "./links";
import { errorLink } from "./links/errorLink";

// export new client instance
export const apolloClient = new ApolloClient({
  cache,
  link: from([errorLink, links]),
  connectToDevTools: true,
});
