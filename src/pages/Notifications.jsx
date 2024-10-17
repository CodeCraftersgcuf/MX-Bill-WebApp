import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import NotificationMainCom from "../components/MainNotification/NotificationMainCom";

const Notifications = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <NotificationMainCom />
      <RightSideBar />
    </div>
  );
};

export default Notifications;
