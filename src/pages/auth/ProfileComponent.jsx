import { useRef, useState } from "react";
const ProfileComponent = () => {
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
