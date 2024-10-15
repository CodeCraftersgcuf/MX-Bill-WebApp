const RightSideProfileInfo = ({ name, email }) => {
  return (
    <div className="flex flex-col gap-1 ms-4">
      {/* Name with bold text and increased size */}
      <h1 className="font-bold text-xl">{name}</h1>

      {/* Email with grey color */}
      <h1 className="text-gray-500">{email}</h1>
    </div>
  );
};

export default RightSideProfileInfo;
