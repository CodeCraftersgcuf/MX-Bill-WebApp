import { useSelector, useDispatch } from "react-redux";
import { dropDownActions } from "../../store/dropDownSlice";

const InOutTop = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.dropDown.selectedType);
  const isOpen = useSelector((state) => state.dropDown.isOpen);

  function toggleDropdownHandler() {
    dispatch(dropDownActions.toggleDropdown());
  }

  let options = ['History', "Schedule", "Requested"];
  options = options.filter((option) => option !== selectedType);
  
  const handleSelect = (option) => {
    dispatch(dropDownActions.setSelectedType(option));
  };
  return (
    <div className="flex justify-between items-center mt-8">
      <div className="flex flex-col ">
        <h1 className="text-xl font-bold">In & Out Payment</h1>
      </div>
      <div className="relative ml-6">
        {/* Dropdown Implementation */}
        <div
          className="flex items-center cursor-pointer border border-gray-300 p-2 rounded-md w-52"
          onClick={toggleDropdownHandler}
        >
          <span className="font-bold">{selectedType}</span>
          <span className="ml-auto">{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 border border-gray-300 rounded-md bg-white w-52 z-10">
            {options.map((option) => (
              <div
                key={option}
                className={`p-2 cursor-pointer hover:bg-gray-100  ${
                  selectedType === option ? "bg-gray-100" : ""
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
  );
};

export default InOutTop;
