import { Link } from "react-router-dom";
const NotificationCardMain = ({ title, message, date, icon, ...props }) => {
  return (
    <div {...props}>
      <Link to="">
        <div>
          <div className="flex items-center justify-between bg-slate-100 rounded relative">
            <div className="flex px-3 py-3 items-center">
              <div className="pe-3 w-10">
                <div className="w-5">
                  <img src={icon} alt="" />
                </div>
              </div>
              <div>
                <div className="font-urbanist-bold text-lg">{title}</div>
                <div className="font-urbanist-bold text-sm">{message}</div>
                <div className="absolute top-[5px] right-[10px] text-sm">
                  {date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotificationCardMain;
