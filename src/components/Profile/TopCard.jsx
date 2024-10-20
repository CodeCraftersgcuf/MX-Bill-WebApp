import React, { useState } from "react";
import { icons } from "../../constants"; // Adjust the path if necessary
import logo from "../../assets/images/logo.png";
import ProfileComponent from "../../pages/auth/ProfileComponent";
import ProfileChart from "./ProfileChart.jsx";

const TopCard = () => {
  const [profileImage, setProfileImage] = useState(icons.userDefault3);
  const userStates = {
    savings: 5000,
    checking: 2000,
    investments: 3500,
    credit: 1000,
    loans: 1500,
  };
    

  const handleImageChange = (newImageUrl) => {
    setProfileImage(newImageUrl); // Update the profile image on change
  };

  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <img src={logo} width={50} alt="logo" />
        <h1 className="font-urbanist-bold text-3xl">Profile</h1>
      </div>

      <section className="w-full p-10 rounded-lg shadow-md my-5 flex items-center justify-between">
        <div>
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
          <ProfileChart userStates={userStates}/>
        </div>
      </section>
    </>
  );
};

export default TopCard;
