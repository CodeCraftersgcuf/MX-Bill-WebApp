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
          <div className="flex me-4 xl:me-0">
            <div className="flex-1 overflow-x-hidden">
              <MiddleDashBoard />
            </div>
            <div className="mx-5 xl:w-[22%] xl:block 2xl:w-1/4 hidden">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
