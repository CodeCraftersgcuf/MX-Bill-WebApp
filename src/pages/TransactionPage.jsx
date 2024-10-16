import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import TransactionPageTop from "../components/Transaction/TransactionPageTop";
import TransactionHistoryTable from '../components/Transaction/TransactionHistoryTable';
const TranscationPage = () => {
  return (
    <div className="flex">
        <LeftSideBar currentTab={"Transaction History"}/>
        <div className="flex flex-col w-full">
        <TransactionPageTop/>
        <TransactionHistoryTable/>
        </div>
    </div>

  )
};

export default TranscationPage;
