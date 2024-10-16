import LeftSideBar from "../components/LeftSideBar";
import TransactionPageTop from "../components/TransactionPageTop";
import TransactionHistoryTable from '../components/TransactionHistoryTable';
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
