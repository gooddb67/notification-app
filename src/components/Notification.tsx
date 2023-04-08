import { useState } from "react";

interface NotificationProps {
  name: string;
  action: string;
  action_occurred: string;
  sub_action?: string;
  key: number;
}

export default function Notification(props: NotificationProps) {
  const { name, action, action_occurred, sub_action } = props;

  const [isRead, setIsRead] = useState(false);

  return (
    <div
      onClick={() => setIsRead(true)}
      className={isRead ? "notification-wrapper read" : "notification-wrapper"}
    >
      {" "}
      <div className="notification-text">
        <span className="font-weight--bold">{name}</span>{" "}
        <span className="font-weight--bold">{action}</span>
      </div>
      <div>{action_occurred}</div>
      <div>{sub_action}</div>
    </div>
  );
}
