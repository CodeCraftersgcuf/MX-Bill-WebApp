import { useState } from "react";
import { icons } from "../../constants";
import LeftSideBarTab from "./LeftSideBarTab";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// eslint-disable-next-line react/prop-types
const LeftSideBar = ({ currentTab = "Home" }) => {  // Default value for currentTab is "Home"
  const [selectedTab, setSelectedTab] = useState(currentTab);  // Default to currentTab

  return (
    <div className="w-1/5 flex flex-col gap-3 mt-10">
      <Link to="/dashboard"> {/* Link for Dashboard */}
        <LeftSideBarTab 
          imageIcon={icons.home4Outline} 
          text="Home" 
          isSelected={selectedTab === "Home"} 
          onClick={() => setSelectedTab("Home")} 
        />
      </Link>
      
      <LeftSideBarTab 
        imageIcon={icons.sendMoney} 
        text="My Bank" 
        isSelected={selectedTab === "My Bank"} 
        onClick={() => setSelectedTab("My Bank")} 
      />
      
      <Link to="/transactionpage"> {/* Link for Transaction History */}
        <LeftSideBarTab 
          imageIcon={icons.paper} 
          text="Transaction History" 
          isSelected={selectedTab === "Transaction History"} 
          onClick={() => setSelectedTab("Transaction History")} 
        />
      </Link>
      
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
  