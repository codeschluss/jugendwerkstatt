import { HttpLink, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { API_URL, WS_URL } from "../../../config/app";

export const networkLink = () => {
  const httpLink = new HttpLink({ uri: API_URL + "graphql" });
  const wsLink = new WebSocketLink(
    new SubscriptionClient(`${WS_URL}graphql`, {
      reconnect: true,
    })
  );
  
  return split(
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
}