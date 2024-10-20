import { icons } from "../../constants";
import Transaction from "./Transaction";
import AnalysisChart from "./AnalysisChart";
import transferIcon from "../../assets/icons/svg-icons/transfer.svg";
import Services from "./Services";
const MiddleDashBoard = () => {
  return (
    <div>
      <div className="mt-8">
        <div className="mx-[32px]">
          <div className="h-full">
            <div className="flex justify-evenly my-5">
              <Transaction iconSrc={transferIcon} text="Transfer" sendTo="" />
              <Transaction
                iconSrc={icons.sendMoney}
                text="Send"
                sendTo="/sendmoney"
              />

              <Transaction
                iconSrc={icons.arrowDownSquare}
                text="Request"
                sendTo="/requestmoney"
              />
              <Transaction
                iconSrc={icons.upAndDownArrow}
                text="In & Out"
                sendTo="/inandout"
              />
            </div>
          </div>

          <div>
            <AnalysisChart />
          </div>
        </div>
        <hr className="mt-5 border-slate-300 ms-[34px]" />
        <Services />
      </div>
    </div>
  );
};

export default MiddleDashBoard;
