import LeftSideBar from "./LeftSideBar/LeftSideBar";
import MiddleDashBoard from "./DashBoard/MiddleDashBoard";
import RightSideBar from "./RightSideBar/RightSideBar";
import Navigation from "./Navigation";

const DashBoard = () => {
  return (
    <>
      <div className="flex">
        <LeftSideBar />
        <div className="flex-1">
          <Navigation />
          <div className="flex">
            <div className="flex-1">
              <MiddleDashBoard />
            </div>
            <div className="mx-5">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
