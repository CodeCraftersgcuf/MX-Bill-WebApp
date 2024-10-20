import NotifiTopCon from "./NotifiTopCon";
import NotifiContent from "./NotifiContent";
const NotificationMainCom = () => {
  return (
    <div className="w-3/5">
      <div className="mx-[32px]">
        <div>
          <NotifiTopCon />
        </div>
        <div className="mt-5">
          <NotifiContent />
        </div>
      </div>
    </div>
  );
};

export default NotificationMainCom;
