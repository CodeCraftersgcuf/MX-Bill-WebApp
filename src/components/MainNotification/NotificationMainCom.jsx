import NotifiTopCon from "./NotifiTopCon";
import NotifiContent from "./NotifiContent";
const NotificationMainCom = () => {
  return (
    <div className="ps-3">
      <div>
        <NotifiTopCon />
      </div>
      <div className="mt-5">
        <NotifiContent />
      </div>
    </div>
  );
};

export default NotificationMainCom;
