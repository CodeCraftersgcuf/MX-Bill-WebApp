import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import TransactionPageTop from "../components/Transaction/TransactionPageTop";
import TransactionHistoryTable from "../components/Transaction/TransactionHistoryTable";
import RightSideBar from '../components/RightSideBar/RightSideBar'
const TranscationPage = () => {
  return (
    <div className="flex">
      <LeftSideBar currentTab={"Transaction History"} />
      <div className="flex flex-col w-3/5 mx-[32px]">
        <TransactionPageTop />
        <TransactionHistoryTable />
      </div>
      <RightSideBar />
    </div>
  );
};

export default TranscationPage;
