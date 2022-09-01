import { useEffect, useState } from "react";

import {
  ActionPerformed,
  PushNotifications,
  PushNotificationSchema,
  Token,
} from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";
import {
  useGetMeBasicQuery,
  useSaveSubscriptionMutation,
} from "../../../GraphQl/graphql";

export default function PushNotificationsContainer() {
  const { data } = useGetMeBasicQuery();

  const [subs] = useSaveSubscriptionMutation();

  useEffect(() => {
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== "granted") {
        PushNotifications.requestPermissions().then((res) => {
          if (res.receive === "denied") {
            showToast("Push Notification permission denied");
          } else {
            showToast("Push Notification permission granted");
            register();
          }
        });
      } else {
        register();
      }
    });
  }, []);

  const register = () => {
    PushNotifications.register();

    PushNotifications.addListener("registration", (token: Token) => {
      const entity = {
        deviceToken: token.value,
        user: {
          id: data?.me?.id,
        },
      };
      subs({
        variables: {
          entity,
        },
      });
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        console.log(notification);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        console.log(notification);
      }
    );
  };

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg,
    });
  };

  return <>""</>;
}
