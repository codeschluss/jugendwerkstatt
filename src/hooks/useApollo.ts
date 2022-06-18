import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useContext } from "react";
import { API_URL } from "../config/app";
import FeedbackContext, { FeedbackType } from "../contexts/FeedbackContext";
import TokenStorageContext from "../contexts/TokenStorageContext";

export const useApollo = () => {

  const { accessToken } = useContext(TokenStorageContext);
  const { setFeedback } = useContext(FeedbackContext);

  const httpLink = new HttpLink({ uri: API_URL + "graphql" });
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: "Bearer " + accessToken,
      },
    }));

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    switch(true) {
      case !!graphQLErrors:
        console.log("test", graphQLErrors);
        setFeedback({
          message: graphQLErrors && graphQLErrors[0].message,
          action: "Probiere es erneut",
          type: FeedbackType.Error
        });
        break;
      case !!networkError:
        setFeedback({
          message: "Schwerwiegender Fehler",
          action: "Kontaktiere den Support",
          type: FeedbackType.Critical
        });
        break;
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authMiddleware, errorLink, httpLink]),
  });
  
  return {
    client
  };
}

export default useApollo;