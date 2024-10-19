import React, { useState } from "react";
import { icons } from "../../constants"; // Adjust the path if necessary
import logo from "../../assets/images/logo.png";
import { FaRegCreditCard, FaRegUserCircle, FaDollarSign } from "react-icons/fa"; // Importing icons from react-icons
import ProfileComponent from "../../auth/ProfileComponent";

const TopCard = () => {
  const [profileImage, setProfileImage] = useState(icons.userDefault3);

  const handleImageChange = (newImageUrl) => {
    setProfileImage(newImageUrl); // Update the profile image on change
  };

  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <img src={logo} width={50} alt="logo" />
        <h1 className="font-urbanist-bold text-3xl">Profile</h1>
      </div>

      <section className="w-full bg-slate-100 p-10 rounded-lg shadow-md my-5 flex items-center justify-between">
        <div className="flex items-center">
          <ProfileComponent
            initialImage={profileImage} // Pass the current profile image
            onImageChange={handleImageChange} // Update the parent state on image change
            editIcon={icons.edit3} // Reuse the edit icon
            customClass="w-28 h-28 rounded-full bg-white overflow-hidden border-4 border-blue-500" // Apply custom styling
          />
          <div className="ml-5">
            <h2 className="text-2xl font-semibold">Nathalie Erneson</h2>
            <p className="text-gray-600">nathalie_erneson@gmail.com</p>
          </div>
        </div>

        <div>
          <div className="mt-3 bg-white mb-2 py-2 rounded-lg shadow-md px-2">
            <div className="flex items-center space-x-3 ps-3 mt-2">
              <FaDollarSign className="text-gray-600 w-5 h-5" />
              <p className="text-lg font-bold">Account Balance: $5,250.00</p>
            </div>
            <div className="flex items-center space-x-3 mt-2 ps-3">
              <FaRegCreditCard className="text-gray-600 w-5 h-5" />
              <p className="text-gray-500">Account Type: Savings</p>
            </div>
            <div className="flex items-center space-x-3 mt-2 ps-3">
              <FaRegUserCircle className="text-gray-600 w-5 h-5" />
              <p className="text-gray-500">Account Number: **** **** 1234</p>
            </div>
          </div>
          <div className="flex space-x-3 mt-4 justify-end">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Transfer Funds
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
              Deposit
            </button>
            <button className="bg-red text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200">
              Withdraw
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCard;
