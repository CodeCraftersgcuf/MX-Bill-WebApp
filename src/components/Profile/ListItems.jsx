import React from "react";
import { icons } from "../../constants";

const ListItems = () => {
  const items = [
    { icon: icons.notification, text: "My Notifications" },
    { icon: icons.location2Outline, text: "Address" },
    { icon: icons.userOutline, text: "Edit Profile" },
    { icon: icons.notification, text: "Notification" },
    { icon: icons.wallet2Outline, text: "Payment" },
    { icon: icons.security, text: "Security" },
    { icon: icons.bookmarkOutline, text: "Language and Region", language: "English (US)" },
    { icon: icons.lock, text: "Privacy Policy" },
    { icon: icons.walletOutline, text: "Help Center" },
  ];

  return (
    <div className="mt-5">
      <h3 className="font-urbanist-bold text-lg mb-2">Quick Actions</h3>
      <ul className="list-none p-5 bg-slate-100 shadow-md rounded-lg grid grid-cols-2 gap-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-5 rounded-md cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <img src={item.icon} alt={item.text} className="w-5 h-5" />
              <span>{item.text}</span>
            </div>
            <div className="flex items-center">
              {item.language && <span className="mr-2">{item.language}</span>} 
              <img
                src={icons.arrowRight}
                alt="Chevron Right"
                className="w-5 h-5"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
