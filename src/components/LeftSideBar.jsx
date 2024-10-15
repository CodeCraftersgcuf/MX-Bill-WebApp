import { useState } from "react";
import { icons } from "../constants";
import LeftSideBarTab from "./LeftSideBarTab";

const LeftSideBar = () => {
  const [selectedTab, setSelectedTab] = useState("Home"); // Default selected tab

  return (
    <div className="w-1/5 flex flex-col gap-3 mt-10">
      <LeftSideBarTab 
        imageIcon={icons.home4Outline} 
        text="Home" 
        isSelected={selectedTab === "Home"} 
        onClick={() => setSelectedTab("Home")} 
      />
      <LeftSideBarTab 
        imageIcon={icons.sendMoney} 
        text="My Bank" 
        isSelected={selectedTab === "My Bank"} 
        onClick={() => setSelectedTab("My Bank")} 
      />
      <LeftSideBarTab 
        imageIcon={icons.paper} 
        text="Transaction History" 
        isSelected={selectedTab === "Transaction History"} 
        onClick={() => setSelectedTab("Transaction History")} 
      />
      <LeftSideBarTab 
        imageIcon={icons.sendMoney} 
        text="Transfer Funds" 
        isSelected={selectedTab === "Transfer Funds"} 
        onClick={() => setSelectedTab("Transfer Funds")} 
      />
      <LeftSideBarTab 
        imageIcon={icons.walletOutline} 
        text="Bank Connect" 
        isSelected={selectedTab === "Bank Connect"} 
        onClick={() => setSelectedTab("Bank Connect")} 
      />
    </div>
  );
};

export default LeftSideBar;
