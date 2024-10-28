import { icons } from "../constants";
const PaymentCard = ({name, accountNumber, balance, amount}) => {
  return (
    <div className="bg-primary text-white flex justify-between py-3 px-5 rounded-3xl ">
      <div className="mt-2">
        <div className="2xl:mb-4 xl:mb-2">
          <h2 className="font-urbanist-medium text-sm mb-1">{name}</h2>
          <div className="text-sm">{accountNumber}</div>
        </div>
        <div>
          <div className="font-urbanist-light text-sm mb-2">{balance}</div>
          <h1 className="font-urbanist-bold xl:text-xl 2xl:text-2xl">{amount}</h1>
        </div>
      </div>
      <div className="w-8">
        <img src={icons.masterCard} alt="" />
      </div>
    </div>
  );
};

export default PaymentCard;
