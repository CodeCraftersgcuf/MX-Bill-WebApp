import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Transaction = ({ iconSrc, text, sendTo }) => {
  console.log(iconSrc);
  return (
    <div className="w-1/4 text-center">
      <Link to={sendTo}>
        <div className="bg-slate-100 p-6 rounded-full">
          <img className="w-full" src={iconSrc} alt="" />
        </div>
        <div className="font-urbanist-bold">{text}</div>
      </Link>
    </div>
  );
};

export default Transaction;
