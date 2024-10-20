import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { icons } from "../../constants";

const ListItems = () => {
  const items = [
    { icon: icons.notification, text: "My Notifications", link: "/notificationpage" },
    { icon: icons.location2Outline, text: "Address", link: "/address" },
    { icon: icons.userOutline, text: "Edit Profile", link: "/userEdit" },
    { icon: icons.notification, text: "Notification", link: "/notificationpage" },
    { icon: icons.wallet2Outline, text: "Payment", link: "/payment" },
    { icon: icons.security, text: "Security", link: "/security" },
    { icon: icons.bookmarkOutline, text: "Language and Region", language: "English (US)", link: "/language-region" },
    { icon: icons.lock, text: "Privacy Policy", link: "/privacy-policy" },
    { icon: icons.walletOutline, text: "Help Center", link: "/help-center" },
  ];

  return (
    <div className="mt-5">
      <h3 className="font-urbanist-bold text-lg mb-2">Quick Actions</h3>
      <ul className="list-none p-5 bg-slate-100 shadow-md rounded-lg grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="flex items-center justify-between bg-white p-5 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-50"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={item.icon} 
                  alt={item.text} 
                  className="w-5 h-5 transition duration-300 ease-in-out text-red" 
                />
                <span className="text-gray-800">{item.text}</span>
              </div>
              <div className="flex items-center">
                {item.language && <span className="mr-2">{item.language}</span>}
                <img
                  src={icons.arrowRight}
                  alt="Chevron Right"
                  className="w-5 h-5 text-gray-500 transition duration-300 ease-in-out hover:text-orange-600"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
