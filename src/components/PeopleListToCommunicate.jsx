import { Link } from "react-router-dom";
const PeopleListToSend = ({
  profileImage,
  UserName,
  userEmail,
  UserId,
  ...props
}) => {
  return (
    <div {...props}>
      <Link to=''>
        <div className="flex items-center justify-between bg-slate-100 rounded shadow-sm border border-slate-300">
          <div className="flex items-center">
            <div className="px-8 text-xl border-e-2">{UserId}</div>
            <div className="ms-7">
              <div className="font-urbanist-bold text-md">{UserName}</div>
              <div className="text-sm">{userEmail}</div>
            </div>
          </div>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-16 h-16 object-cover mx-5 my-1"
          />
        </div>
      </Link>
    </div>
  );
};

export default PeopleListToSend;