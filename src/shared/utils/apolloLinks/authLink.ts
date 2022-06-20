import { ApolloLink } from "@apollo/client";

export const authLink = () => {
  
  return new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }));

    return forward(operation);
  });
}