import { Link } from "react-router-dom";
const PeopleListToSend = ({
  profileImage,
  UserName,
  userEmail,
  UserId,
  ...props
}) => {
  console.log(profileImage);
  return (
    <div {...props}>
      <Link to=''>
        <div className="flex items-center justify-between bg-slate-200 rounded">
          <div className="flex items-center">
            <div className="px-8 text-xl border-e-2">{UserId}</div>
            <div className="ms-7">
              <div className="font-urbanist-bold">{UserName}</div>
              <div>{userEmail}</div>
            </div>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover mx-5 my-1"
          />
        </div>
      </Link>
    </div>
  );
};

export default PeopleListToSend;
