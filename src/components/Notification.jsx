import { icons } from "../constants";
import NotificationMain from "./NotificationMain";
import { DUMMY_NOTIFICATIONS } from "../util/DummyNotifications";

const Notification = () => {
  return (
    <div>
      {DUMMY_NOTIFICATIONS.map((notification) => (
        <NotificationMain
            title={notification.title}
            message={notification.message}
            className="my-3 mx-1"
        />
      ))}
    </div>
  );
};

export default Notification;
