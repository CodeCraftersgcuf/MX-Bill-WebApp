import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import SendMain from "../components/SendMoney/SendMain";

const SendMoneyPage = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <SendMain />
      <RightSideBar />
    </div>
  );
};

export default SendMoneyPage;
