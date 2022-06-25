// apollo
import { InMemoryCache } from "@apollo/client";

// export cache
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        UserEntity: {
          merge: (_, incoming) => incoming,
        },
      },
    },
  },
});
