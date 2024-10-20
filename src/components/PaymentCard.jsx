import { icons } from "../constants";
const PaymentCard = () => {
  return (
    <div className="bg-primary text-white flex justify-between py-3 px-5 rounded-3xl ">
      <div className="mt-2">
        <div className="mb-4">
          <h2 className="font-urbanist-medium text-sm mb-1">Andrew Ainsley</h2>
          <div className="text-sm">.... .... .... 3779</div>
        </div>
        <div>
          <div className="font-urbanist-light text-sm mb-2">Your Balance</div>
          <h1 className="font-urbanist-bold text-2xl">$12,689</h1>
        </div>
      </div>
      <div className="w-8">
        <img src={icons.masterCard} alt="" />
      </div>
    </div>
  );
};

export default PaymentCard;
