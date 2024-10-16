import { Link } from "react-router-dom";
const NotificationMain = ({ title, message, ...props }) => {
  return (
    <div {...props}>
      <Link to="">
        <div>
          <div className="flex items-center justify-between bg-slate-200 rounded">
            <div className="px-3 py-3 items-center">
              <div className="text-sm">{title}</div>
              <div className="font-urbanist-bold text-sm">{message}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotificationMain;
