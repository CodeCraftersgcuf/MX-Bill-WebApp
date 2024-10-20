const RightSideProfileImage = ({ userProfile }) => {
  return (
    <div className="mt-5 pt-5 mb-3 flex justify-center">
      <img
        src={userProfile}
        alt="Profile Picture"
        className="w-20 h-20 rounded-full"
      />
    </div>
  );
};

export default RightSideProfileImage;
