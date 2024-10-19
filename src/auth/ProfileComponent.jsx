import { useRef, useState, useEffect } from "react";

const ProfileComponent = ({
  initialImage, // Passed image source
  onImageChange,
  editIcon,
  buttonStyles = "absolute right-0 bottom-0 bg-blue-500 text-white rounded-full p-2",
  imageStyles = "rounded-full w-28 h-28 object-cover",
  imgAlt = "Profile",
  buttonAlt = "Edit Profile Picture",
}) => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(initialImage);

  // Update profileImage state if initialImage prop changes
  useEffect(() => {
    setProfileImage(initialImage);
  }, [initialImage]);

  const handleImageUpload = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      if (onImageChange) {
        onImageChange(imageUrl); // Notify parent component of image change
      }
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <span className="relative">
        <img
          src={profileImage}
          alt={imgAlt}
          className={imageStyles}
        />
        <button
          onClick={handleImageUpload}
          className={buttonStyles}
          aria-label={buttonAlt}
        >
          <img src={editIcon} alt={buttonAlt} className="w-5 h-5" />
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
