import NotificationCard from "./NotificationCard";
import { DUMMY_NOTIFICATIONS } from "../../util/DummyNotifications";

const Notification = () => {
  return (
    <div>
      {DUMMY_NOTIFICATIONS.map((notification) => (
        <NotificationCard
          key={notification.id}
          title={notification.title}
          message={notification.message}
          date={notification.date}
          icon={notification.icon}
          className="my-3"
        />
      ))}
    </div>
  );
};

export default Notification;
