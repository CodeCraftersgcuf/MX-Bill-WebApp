import { icons } from "../constants";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Profile Picture Section */}
      <div>
        <Link to={'/userprofile'} className="flex items-center space-x-4">
          <img
            src={icons.profile} // Replace with your pfp source
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-700">Username</span>
        </Link>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-6">
        <Link
          to={"/notificationpage"}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <img src={icons.notification2} className="w-6 h-6" />
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 focus:outline-none">
          <img src={icons.settings} className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
