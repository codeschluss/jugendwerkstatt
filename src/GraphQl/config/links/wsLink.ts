import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

// config

// utils
import { readAuthToken } from "../../../shared/utils";

export const wsClient = new SubscriptionClient(process.env.REACT_APP_WS_URL + "graphql", {
  reconnect: true,
  lazy: true,
  connectionParams: () => {
    // fetch token
    const token = readAuthToken("accessToken");
    let headers = {};
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return {
      headers,
    };
  },
});

export const wsLink = new WebSocketLink(wsClient);
