import Notification from "../components/Notification";
import notificationData from "../data";
import { useState } from "react";

export default function Notifications() {
  const [notifications, updateNotifications] = useState(notificationData);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(
    notificationData.length
  );

  const handleClick = (clickedIdx: number) => {
    const updatedNotes = notifications.map((notification) => {
      if (notification.id === clickedIdx) {
        return { ...notification, isRead: true };
      } else {
        return notification;
      }
    });

    const readNotes = updatedNotes.filter((note) => note.isRead).length;

    updateNotifications(updatedNotes);
    setUnreadNotificationCount(notificationData.length - readNotes);
  };

  const handleClearAll = () => {
    const updatedNotes = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });

    const readNotes = updatedNotes.filter((note) => note.isRead).length;

    updateNotifications(updatedNotes);
    setUnreadNotificationCount(0);
  };

  const notificationList = notifications.map((notification, idx) => {
    return (
      <Notification key={idx} handleClick={handleClick} {...notification} />
    );
  });

  return (
    <div className="page-wrapper">
      <div className="d-flex justify-between mb-3">
        <div>
          <span className="notification-heading">Notifications </span>
          <span
            className={
              unreadNotificationCount ? "notification-count" : "d-none"
            }
          >
            {unreadNotificationCount}
          </span>
        </div>
        <button type="button" onClick={handleClearAll}>
          Mark all as read
        </button>
      </div>
      {notificationList}
    </div>
  );
}
