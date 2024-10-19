import { icons } from "../../constants";
import PaymentCard from "./PaymentCard";
import Transaction from "./Transaction";
import transferIcon from "../../assets/icons/svg-icons/transfer.svg";
import Services from "./Services";
import Navigation from "../Navigation";
const MiddleDashBoard = () => {
  return (
    <div className="w-3/5">
      <Navigation />
      <div className="mt-8">
        <div className="flex justify-between mx-[32px]">
          <PaymentCard />
          <div className="w-2/4">
            <div className="ms-5 flex flex-col justify-between h-full">
              <div className="flex justify-between mb-3">
                <Transaction
                  iconSrc={transferIcon}
                  text="Transfer"
                  sendTo=""
                  className="bg-slate-300 rounded-xl px-6 py-8 w-48"
                />
                <Transaction
                  iconSrc={icons.sendMoney}
                  text="Send"
                  sendTo="/sendmoney"
                  className="bg-blue-300 rounded-xl px-6 py-8 w-48"
                />
              </div>
              <div className="flex justify-between">
                <Transaction
                  iconSrc={icons.arrowDownSquare}
                  text="Request"
                  sendTo="/requestmoney"
                  className="bg-pink-300 rounded-xl px-6 py-8 w-48"
                />
                <Transaction
                  iconSrc={icons.upAndDownArrow}
                  text="In & Out"
                  sendTo="/inandout"
                  className="bg-orange-300 rounded-xl px-6 py-8 w-48"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5 border-slate-300 mx-[34px]" />
        <Services />
      </div>
    </div>
  );
};

export default MiddleDashBoard;
