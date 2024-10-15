import LeftSideBar from "./LeftSideBar";
import MiddleDashBoard from "./MiddleDashBoard";
import RightSideBar from "./RightSideBar";

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
