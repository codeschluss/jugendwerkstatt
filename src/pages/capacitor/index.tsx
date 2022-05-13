import React, { useEffect, useState } from "react";

import {
  PushNotificationSchema,
  PushNotifications,
  Token,
  ActionPerformed,
} from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";

export default function PushNotificationsContainer() {
  const nullEntry: any[] = [];
  const [notifications, setnotifications] = useState(nullEntry);

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
    console.log("Initializing HomePage");

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener("registration", (token: Token) => {
      showToast(token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      alert("Error on registration: " + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
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

    // Method called when tapping on a notification
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
