// apollo
import { InMemoryCache } from "@apollo/client";

// export cache
export const cache = new InMemoryCache({
  // addTypename: false,
  typePolicies: {
    // NotificationEntity: {
    //   // In an inventory management system, products might be identified
    //   // by their UPC.
    //   keyFields: ["notifications"],
    // },
  },
});
