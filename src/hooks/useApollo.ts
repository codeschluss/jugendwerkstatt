import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useContext } from "react";
import { API_URL, WS_URL } from "../config/app";
import FeedbackContext, { FeedbackType } from "../contexts/FeedbackContext";
import TokenStorageContext from "../contexts/TokenStorageContext";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";

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
    switch (true) {
      case !!graphQLErrors:
        setFeedback({
          message: graphQLErrors && graphQLErrors[0].message,
          action: "Probiere es erneut",
          type: FeedbackType.Error,
        });
        break;
      case !!networkError:
        setFeedback({
          message: "Schwerwiegender Fehler",
          action: "Kontaktiere den Support",
          type: FeedbackType.Critical,
        });
        break;
    }
  });

  const wsLink = new WebSocketLink(
    new SubscriptionClient(`${WS_URL}graphql`, {
      reconnect: true,
    })
  );
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authMiddleware, errorLink, splitLink]),
  });

  return {
    client,
  };
};

export default useApollo;
