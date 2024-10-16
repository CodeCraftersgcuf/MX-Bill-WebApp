import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import RequestMain from "../components/RequestMoney/RequestMain";

const RequestMoney = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <RequestMain />
      <RightSideBar />
    </div>
  )
}

export default RequestMoney