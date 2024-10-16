import { icons } from "../../constants";
import RightSideProfileImage from "./RightSideProfileImage";
import RightSideProfileInfo from "./RightSideProfileInfo";
import Notification from "../Notification";
const RightSideBar = () => {
  return (
    <div className="w-1/5">
      {/* Passing the props (background image and profile image) to RightSideProfileImage */}
      <RightSideProfileImage
        backgroundProfile={icons.backgroundProfile} // Background image prop
        userProfile={icons.userDefault2} // Profile image prop
      />
      <div className="mt-16"></div>
      <RightSideProfileInfo name={"Adrin Hajdin"} email={"adrin@smaster.pro"} />
      <div className="border-t">
        <Notification />
      </div>
    </div>
  );
};

export default RightSideBar;
