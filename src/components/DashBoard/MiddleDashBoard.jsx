import { icons } from "../../constants";
import PaymentCard from "./PaymentCard";
import Transaction from "./Transaction";
import Services from "./Services";
const MiddleDashBoard = () => {
  return (
    <div className="w-3/5 mt-8">
      <div className="flex justify-center">
        <PaymentCard />
        <div className="ms-10">
          <div className="flex justify-evenly mb-3">
            <Transaction iconSrc={icons.send} text="Transfer" />
            <Transaction iconSrc={icons.sendMoney} text="Send" />
          </div>
          <div className="flex justify-evenly">
            <Transaction iconSrc={icons.arrowDownSquare} text="Request" />
            <Transaction iconSrc={icons.upAndDownArrow} text="In & Out" />
          </div>
        </div>
      </div>
      <hr className="mt-5 border-slate-300 mx-[34px]" />
      <Services />
    </div>
  );
};

export default MiddleDashBoard;
