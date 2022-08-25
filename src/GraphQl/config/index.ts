// apollo
import { ApolloClient, DefaultOptions, from } from "@apollo/client";

// cache
import { cache } from "./cache";

// links
import { links } from "./links";
import { errorLink } from "./links/errorLink";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

// export new client instance
export const apolloClient = new ApolloClient({
  cache,
  link: from([errorLink, links]),
  connectToDevTools: true,
  defaultOptions
});
