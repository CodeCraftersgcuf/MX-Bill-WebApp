import { theme } from "../../constants";
import BalanceCard from "./BalanceCard";
const bgColor = theme.COLORS.info;
const TransactionAmountCard = () => {
  return (
    <>
      <div
        className="w-[95%] flex justify-between mt-5 p-3 px-4 rounded-md"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col text-white">
          {" "}
          {/* Apply text-white to parent */}
          <h1>Plaid Checking</h1>
          <p>Plaid Gold Standard 0% Interest Checking</p>
          <p>*** **** *** 0000</p>
        </div>

        <div>
          <BalanceCard balance="2,345.67" />
        </div>
      </div>

    </>
  );
};

export default TransactionAmountCard;
