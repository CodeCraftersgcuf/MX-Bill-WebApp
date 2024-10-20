import React from "react";
import Accordion from "../components/HelpCenter/Accordian";
import TopSection from "../components/HelpCenter/TopSection";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex">
      <LeftSideBar />
      <main className="mx-auto my-5 w-3/5">
        <TopSection />
      </main>
    </div>
  );
};

export default HelpCenter;
