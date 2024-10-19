import { FaBell, FaCog } from "react-icons/fa"; // Importing icons from react-icons
import { icons } from "../constants";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Profile Picture Section */}
      <div className="flex items-center space-x-4">
        <img
          src={icons.profile} // Replace with your pfp source
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold text-gray-700">Username</span>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-6">
        <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
          <FaBell className="w-6 h-6" />
        </button>
        <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
          <FaCog className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
