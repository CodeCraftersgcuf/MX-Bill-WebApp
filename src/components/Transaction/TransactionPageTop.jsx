import { useSelector, useDispatch } from "react-redux";
import { icons } from "../../constants";
import { dropDownActions } from "../../store/dropDownSlice";
import TransactionAmountCard from "./TransactionAmountCard";

const TransactionPageTop = () => {
  const dispatch = useDispatch();
  const selectedAccount = useSelector(
    (state) => state.dropDown.selectedAccount
  );
  const isOpen = useSelector((state) => state.dropDown.isOpen);

  const options = ["Plaid Checking", "Plaid Savings", "Plaid Investment"];

  function toggleDropdownHandler() {
    dispatch(dropDownActions.toggleDropdown());
  }

  const handleSelect = (option) => {
    dispatch(dropDownActions.setSelectedAccount(option));
  };

  return (
    <div className="mt-10 w-full">
      <div className="flex justify-between me-36">
        <div className="flex flex-col ">
          <h1 className="text-xl font-bold">Transaction History</h1>
          <p className="text-gray-600">
            See your bank details and transactions.
          </p>
        </div>
        <div className="relative ml-6">
          {/* Dropdown Implementation */}
          <div
            className="flex items-center cursor-pointer border border-gray-300 p-2 rounded-md w-52"
            onClick={toggleDropdownHandler}
          >
            <img
              src={icons.walletOutline}
              alt="account"
              className="w-5 h-5 mr-2"
            />
            <span className="font-bold">{selectedAccount}</span>
            <span className="ml-auto">{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 mt-1 border border-gray-300 rounded-md bg-white w-52 z-10">
              {options.map((option) => (
                <div
                  key={option}
                  className={`p-2 cursor-pointer hover:bg-gray-100  ${
                    selectedAccount === option ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <TransactionAmountCard />
      </div>
    </div>
  );
};

export default TransactionPageTop;
