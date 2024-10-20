import { icons } from "../../constants";
import RightSideProfileImage from "./RightSideProfileImage";
import RightSideProfileInfo from "./RightSideProfileInfo";
import RSNotification from "./RSNotification";
import PaymentCard from "../PaymentCard";
const RightSideBar = () => {
  return (
    <div className="rounded-lg shadow-lg shadow-slate-300">
      {/* Passing the props (background image and profile image) to RightSideProfileImage */}
      <RightSideProfileImage
        backgroundProfile={icons.backgroundProfile} // Background image prop
        userProfile={icons.userDefault2} // Profile image prop
      />
      <RightSideProfileInfo name={"Adrin Hajdin"} email={"adrin@smaster.pro"} />
      <div className="border-t border-slate-300 mt-3 mx-3">
        <RSNotification />
      </div>
      <div className="mx-3 py-4">
        <PaymentCard />
      </div>
    </div>
  );
};

export default RightSideBar;
