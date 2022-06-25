import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

// config
import { WS_URL } from "../../../config/app";

// utils
import { readAuthToken } from "../../../shared/utils";

export const wsClient = new SubscriptionClient(WS_URL, {
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
