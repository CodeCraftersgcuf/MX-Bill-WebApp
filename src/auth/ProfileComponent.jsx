import { useRef, useState } from "react";
import { icons } from "../constants";
const ProfileComponent = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(icons.userDefault2);

  const handleImageUpload = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <span className="relative">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-28 h-28  object-cover"
        />
        <button
          onClick={handleImageUpload}
          className="absolute right-0 bottom-0 bg-blue-500 text-white rounded-full p-2"
          aria-label="Edit Profile Picture"
        >
          <img src={icons.edit3} alt="Edit" className="w-5 h-5" />
        </button>
      </span>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfileComponent;
