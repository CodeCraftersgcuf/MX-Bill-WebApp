import { useState } from "react";
import { DUMMY_DATA } from "../util/DummyData";
import PeopleListToCommunicate from "./PeopleListToCommunicate";
import Tabs from "./Tabs";

const SendYourMoney = () => {
  const [tab, setTab] = useState("All");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
  console.log(tab);

  // Filter DUMMY_DATA based on the selected tab
  const filteredData = () => {
    switch (tab) {
      case "Favourite":
        return DUMMY_DATA.filter((person) => person.isFavourite);
      case "Bank":
        return DUMMY_DATA.filter((person) => person.type === "bank");
      case "E-Wallet":
        return DUMMY_DATA.filter((person) => person.type === "E-Wallet");
      default:
        return DUMMY_DATA;
    }
  };

  return (
    <div>

      <div className="mt-4 mb-6">
        <Tabs
          firstTab="All"
          secondTab="Favourite"
          thirdTab="Bank"
          fourthTab="E-Wallet"
          currentTab={tab}
          onTabChange={handleTabChange} // Pass the handler to Tabs
        />
      </div>

      <div className="">
        {filteredData().map((person) => (
          <PeopleListToCommunicate
            key={person.id}
            UserId={person.id}
            profileImage={person.image}
            UserName={person.name}
            userEmail={person.email}
            className="my-3"
          />
        ))}
      </div>
    </div>
  );
};

export default SendYourMoney;
