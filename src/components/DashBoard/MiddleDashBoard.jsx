import { icons } from "../../constants";
import Transaction from "./Transaction";
import AnalysisChart from "./AnalysisChart";
import transferIcon from "../../assets/icons/svg-icons/transfer.svg";
import Services from "./Services";
const MiddleDashBoard = () => {
  return (
    <div>
      <div className="mt-8">
        <div className="ms-4">
          <div className="h-full">
            <div className="flex md:flex-row flex-col justify-between my-5">
              <div className="flex flex-1">
                <div className="flex-1 me-3">
                  <Transaction
                    iconSrc={transferIcon}
                    text="Transfer"
                    sendTo=""
                  />
                </div>
                <div className="flex-1 md:me-3">
                  <Transaction
                    iconSrc={icons.sendMoney}
                    text="Send"
                    sendTo="/sendmoney"
                  />
                </div>
              </div>
              <div className="flex flex-1">
                <div className="flex-1 me-3">
                  <Transaction
                    iconSrc={icons.arrowDownSquare}
                    text="Request"
                    sendTo="/requestmoney"
                  />
                </div>
                <div className="flex-1">
                  <Transaction
                    iconSrc={icons.upAndDownArrow}
                    text="In & Out"
                    sendTo="/inandout"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <AnalysisChart />
          </div>
        </div>
        <hr className="mt-5 border-slate-300 " />
        <Services />
      </div>
    </div>
  );
};

export default MiddleDashBoard;
