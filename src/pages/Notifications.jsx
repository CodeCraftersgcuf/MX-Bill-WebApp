import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import NotificationMainCom from "../components/MainNotification/NotificationMainCom";
import Navigation from "../components/Navigation";

const Notifications = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <div className="flex-1">
        <Navigation />
        <div className="flex me-4 xl:me-0">
          <div className="flex-1 overflow-x-hidden">
            <NotificationMainCom />
          </div>
          <div className="mx-5 xl:w-[22%] xl:block 2xl:w-1/4 hidden">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
