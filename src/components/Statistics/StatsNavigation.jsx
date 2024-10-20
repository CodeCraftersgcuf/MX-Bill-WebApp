import React from "react";

const StatsNavigation = ({ period, setPeriod }) => {
  return (
    <div className="flex justify-between mb-6 backdrop-blur-md bg-white bg-opacity-60 p-4 rounded-lg shadow-md">
      {["Month", "Quarter", "Year", "YTY"].map((p) => (
        <button
          key={p}
          className={`px-4 py-2 rounded-lg transition duration-300 ${
            period === p
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setPeriod(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default StatsNavigation;
