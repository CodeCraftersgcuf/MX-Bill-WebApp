import NotificationCard from "./NotificationCard";
import { DUMMY_NOTIFICATIONS } from "../../util/DummyNotifications";
import { Link } from "react-router-dom";
import classes from "./Notification.module.css";

const RSNotification = () => {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-3">
        <div className="font-urbanist-bold text-sm">Notifications</div>
        <div>
          <Link to={'/notificationpage'}>
            <button className="font-urbanist-bold text-sm hover:bg-blue-700 transition-all border px-2 py-1 rounded-xl bg-primary text-white ">
              View All
            </button>
          </Link>
        </div>
      </div>
      <div className={`${classes.scrollableNotification}`}>
        {DUMMY_NOTIFICATIONS.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
            date={notification.date}
            icon={notification.icon}
            className="mb-3"
          />
        ))}
      </div>
    </div>
  );
};

export default RSNotification;
