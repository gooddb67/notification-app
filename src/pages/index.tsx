import Notification from "../components/Notification";
import data from "./data";
import { useState } from "react";

export default function Notifications() {
  const notifications = data.map((notification, idx) => {
    return <Notification key={idx} {...notification} />;
  });

  const [count, setCount] = useState(notifications.length);

  return (
    <div className="page-wrapper">
      <span className="notification-heading">Notifications</span>
      <span className="notification-count">{count}</span>
      {notifications}
    </div>
  );
}
