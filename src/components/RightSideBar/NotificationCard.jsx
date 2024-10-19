import { Link } from "react-router-dom";
const NotificationMain = ({ title, message, date, icon, ...props }) => {
  return (
    <div {...props}>
      <Link to="">
        <div>
          <div className="flex items-center justify-between bg-slate-200 rounded relative">
            <div className="flex px-3 py-3 items-center">
              <div className="pe-3 w-10">
                <div className="w-5">
                  <img src={icon} alt="" />
                </div>
              </div>
              <div>
                <div className="font-urbanist-bold text-[14px]">{title}</div>
                <div className="font-urbanist-bold text-[12px]">{message}</div>
                <div className="text-[12px] absolute top-[5px] right-[10px]">
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

export default NotificationMain;
