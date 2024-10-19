import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Transaction = ({ iconSrc, text, sendTo, ...props }) => {
  console.log(iconSrc);
  return (
    <Link to={sendTo}>
      <div {...props}>
        <div className="flex items-center">
          <div className="w-14 pe-4">
            <img src={iconSrc} alt="" />
          </div>
          <div className="font-urbanist-bold">{text}</div>
        </div>
      </div>
    </Link>
  );
};

export default Transaction;
