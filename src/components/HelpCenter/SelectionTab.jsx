import { useSelector, useDispatch } from "react-redux";
import { dropDownActions } from "../../store/dropDownSlice";

const SelectionTab = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.dropDown.selectedType);
  const isOpen = useSelector((state) => state.dropDown.isOpen);

  function toggleDropdownHandler() {
    dispatch(dropDownActions.toggleDropdown());
  }

  const options = ['General', "Account", "Security", "Transactions", "Payments"];
  
  const handleSelect = (option) => {
    dispatch(dropDownActions.setSelectedType(option));
  };

  return (
    <div className="">
      <div className="relative ml-6">
        {/* Dropdown Implementation */}
        <div
          className="flex items-center cursor-pointer border border-gray-300 p-2 rounded-md w-52"
          onClick={toggleDropdownHandler}
        >
          <span className="font-bold">{selectedType || "Select an option"}</span>
          <span className="ml-auto">{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 text-black border border-gray-300 rounded-md bg-white w-52 z-10">
            {options
              .filter(option => option !== selectedType) // Filter out the selected option
              .map((option) => (
                <div
                  key={option}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedType === option ? "bg-gray-100" : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionTab;
