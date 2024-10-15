import { icons } from "../constants";
const PaymentCard = () => {
  return (
    <div className="bg-primary text-white flex justify-between p-6 w-2/4 rounded-3xl ">
      <div className="mt-2">
        <div className="mb-5">
          <h2 className="font-urbanist-medium text-xl mb-1">Andrew Ainsley</h2>
          <div className="text-lg">.... .... .... 3779</div>
        </div>
        <div>
          <div className="font-urbanist-light mb-3">Your Balance</div>
          <h1 className="font-urbanist-bold text-5xl">$12,689</h1>
        </div>
      </div>
      <div>
        <img src={icons.masterCard} alt="" />
      </div>
    </div>
  );
};

export default PaymentCard;
