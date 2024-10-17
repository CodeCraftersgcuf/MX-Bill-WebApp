import { theme } from "../../constants";

const BalanceCard = ({ balance = "0.00" }) => {
  return (
    <div className="text-center bg-blue-500 text-white py-3 rounded-md px-2">
      <h1 className="font-urbanist-bold">Current Balance</h1>
      <p className="font-urbanist-bold">${balance}</p>
    </div>
  )
};
export default BalanceCard;
