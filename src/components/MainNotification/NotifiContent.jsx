import { DUMMY_NOTIFICATIONS } from "../../util/DummyNotifications";
import NotificationCardMain from './NotificationCardMain';
const NotifiContent = () => {
  return (
    <div>
      {DUMMY_NOTIFICATIONS.map((notification) => (
        <NotificationCardMain
          key={notification.id}
          title={notification.title}
          message={notification.message}
          date={notification.date}
          icon={notification.icon}
          className="mb-3"
        />
      ))}
    </div>
  );
};

export default NotifiContent;
