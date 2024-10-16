import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import InAndOutMain from "../components/InAndOut/InAndOutMain";

const InAndOut = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <InAndOutMain />
      <RightSideBar />
    </div>
  )
}

export default InAndOut

