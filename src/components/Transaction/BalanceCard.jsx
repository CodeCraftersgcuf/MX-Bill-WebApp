import { theme } from "../../constants";
const bgColor = theme.COLORS.gray3;

const BalanceCard = ({ balance = "0.00" }) => {
  return (
    <div className="w-full h-full flex me-3 flex-col text-center text-white" style={{ backgroundColor: bgColor }}>
      <h1>Current Balance</h1>
      <p>${balance}</p>
    </div>
  )
};
export default BalanceCard;
