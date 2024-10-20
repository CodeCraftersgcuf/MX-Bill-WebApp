import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Transaction = ({ iconSrc, text, sendTo, ...props }) => {
  console.log(iconSrc);
  return (
    <Link to={sendTo}>
      <div {...props}>
        <div className="flex items-center shadow-md py-4 px-6 rounded-lg">
          <div className="w-20">
            <img
              src={iconSrc}
              alt=""
              className=" rounded-full bg-yellow-500 p-3"
              width={50}
              style={{
                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25)) invert(1)"
              }}
            />
          </div>
          <div className="font-urbanist-bold">{text}</div>
        </div>
      </div>
    </Link>
  );
};

export default Transaction;
