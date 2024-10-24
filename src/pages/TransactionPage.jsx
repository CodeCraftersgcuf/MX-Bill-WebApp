import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import TransactionPageTop from "../components/Transaction/TransactionPageTop";
import TransactionHistoryTable from "../components/Transaction/TransactionHistoryTable";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import Navigation from "../components/Navigation";
const TranscationPage = () => {
  return (
    <div className="flex">
      <LeftSideBar currentTab={"Transaction History"} />
      <div className="flex-1">
        <Navigation />
        <div className="flex me-4 xl:me-0">
          <div className="flex-1 overflow-x-hidden">
            <div className="flex flex-col ps-3">
              <TransactionPageTop />
              <TransactionHistoryTable />
            </div>
          </div>
          <div className="mx-5 xl:w-[22%] xl:block 2xl:w-1/4 hidden">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscationPage;
