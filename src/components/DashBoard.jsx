import LeftSideBar from "./LeftSideBar/LeftSideBar";
import MiddleDashBoard from "./DashBoard/MiddleDashBoard";
import RightSideBar from "./RightSideBar/RightSideBar";

const DashBoard = () => {
  return (
    <>
      <div className="flex">
        <LeftSideBar />
        <MiddleDashBoard />
        <RightSideBar />
      </div>
    </>
  );
};

export default DashBoard;
