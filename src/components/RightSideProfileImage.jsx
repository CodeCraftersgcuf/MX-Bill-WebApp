const RightSideProfileImage = ({ backgroundProfile, userProfile }) => {
    return (
      <div className="relative w-full">
        {/* Background image */}
        <img
          src={backgroundProfile}
          alt="Background Profile Picture"
          className="h-28 w-full object-cover"
        />
  
        {/* Profile picture - Positioned on top of the background */}
        <img
          src={userProfile}
          alt="Profile Picture"
          className="w-24 h-24 rounded-full absolute left-[60px] transform -translate-x-1/2 -translate-y-1/2 top-full"
        />
      </div>
    );
  };
  
  export default RightSideProfileImage;
  