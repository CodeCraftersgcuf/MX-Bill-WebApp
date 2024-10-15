// eslint-disable-next-line react/prop-types
const Transaction = ({ iconSrc, text }) => {
  console.log(iconSrc)
  return (
    <div className="w-1/4 text-center">
      <div className="bg-slate-200 p-6 rounded-full">
        <img className="w-full" src={iconSrc} alt="" />
      </div>
      <div className="font-urbanist-bold">{text}</div>
    </div>
  );
};

export default Transaction;
