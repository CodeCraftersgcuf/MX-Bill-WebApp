import React from "react";
import { icons } from "../../constants";
import Tabs from "./Tabs";
import SelectionTab from "./SelectionTab";

const TopSection = () => {
  return (
    <section className="p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src={icons.arrowLeft}
            className="cursor-pointer bg-yellow-500 rounded-full p-2"
            style={{ filter: "invert(1)" }}
            width={35}
            alt="Back arrow"
          />
          <h1 className="font-urbanist-bold text-2xl">Help Center</h1>
        </div>
        <SelectionTab />
      </div>

      <div className="my-6">
        <Tabs />
      </div>
    </section>
  );
};

export default TopSection;
