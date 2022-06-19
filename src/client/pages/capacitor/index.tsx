import { useEffect, useState } from "react";

import {
  ActionPerformed, PushNotifications, PushNotificationSchema, Token
} from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";
import {
  useGetMeBasicQuery,
  useSaveSubscriptionMutation
} from "../../../GraphQl/graphql";
// import {
//   useGetMeBasicQuery,
//   useSaveSubscriptionMutation,
// } from "../../../GraphQl/graphql";

export default function PushNotificationsContainer() {
  const nullEntry: any[] = [];
  const [notifications, setnotifications] = useState(nullEntry);

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
      })
        .then((subs) => alert(subs.data?.saveSubscription?.id))
        .catch((err) => alert(err));
    });

    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        setnotifications((notifications) => [
          ...notifications,
          {
            id: notification.id,
            title: notification.title,
            body: notification.body,
            type: "foreground",
          },
        ]);
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: ActionPerformed) => {
        setnotifications((notifications) => [
          ...notifications,
          {
            id: notification.notification.data.id,
            title: notification.notification.data.title,
            body: notification.notification.data.body,
            type: "action",
          },
        ]);
      }
    );
  };

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg,
    });
  };

  return (
    <>
      <h1 onClick={register}>GET NOTIFIED</h1>

      {notifications.map((notif: any) => (
        <div key={notif.id}>
          <div>
            <div>
              <h3 className="notif-title">{notif.title}</h3>
            </div>
            <p>{notif.body}</p>
            {notif.type === "foreground" && (
              <p>This data was received in foreground</p>
            )}
            {notif.type === "action" && <p>This data was received on tap</p>}
          </div>
        </div>
      ))}
    </>
  );
}
