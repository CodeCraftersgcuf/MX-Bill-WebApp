import { theme } from "../../constants";

// eslint-disable-next-line react/prop-types
const LeftSideBarTab = ({ imageIcon, text, isSelected, onClick }) => {
  // Apply conditional styles based on whether the tab is selected
  const bgColor = isSelected ? theme.COLORS.info : "transparent";
  const textColor = isSelected ? "text-white" : "text-black";
  const isFilter = isSelected ? "invert(1)" : "invert(0)";

  return (
    <div
      className={`flex items-center w-[80%] ms-10 p-2 py-4 rounded-lg cursor-pointer ${textColor}`}
      style={{ backgroundColor: bgColor }} // Inline style for dynamic background color
      onClick={onClick} // Handle click event to change the selected tab
    >
      <img className={`w-6 h-6`} src={imageIcon} alt="Side Bar Icon" style={{ filter: isFilter }}  />
      <h1 className="ms-5">{text}</h1>
    </div>
  );
};

export default LeftSideBarTab;
