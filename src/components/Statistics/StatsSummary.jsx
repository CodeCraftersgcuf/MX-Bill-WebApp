import React from "react";
import { icons } from "../../constants";
import {
  FaChartLine,
  FaRegHourglass,
  FaChartPie,
  FaClipboardList,
} from "react-icons/fa";

const Summary = ({ income, expense }) => {
  const totalIncome = income.reduce((a, b) => a + b, 0);
  const totalExpense = expense.reduce((a, b) => a + b, 0);
  const profit = totalIncome - totalExpense;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  // Calculating additional statistics
  const bestWeek = Math.max(...income);
  const averageValue = (totalIncome - totalExpense) / income.length;
  const worstWeek = Math.min(...income);
  const transactions = income.length; // Assuming each entry in income array is a transaction

  const styles = {
    box: {
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    income: { backgroundColor: "#A3EBA1" }, // Light green
    expense: { backgroundColor: "#F6A3A1" }, // Light red
    profit: { backgroundColor: "#A1C3EBA1" }, // Light blue
    additionalStats: {
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "85%",
      margin: "auto",
    },
    icon: {
      marginRight: "8px",
    },
  };

  return (
    <div className="mt-6 py-4 px-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="grid grid-cols-3 gap-8">
        <div
          className="p-4 rounded-lg flex justify-around"
          style={{ ...styles.income }}
        >
          <img
            src={icons.arrowDownSquare}
            width={40}
            alt="Income Icon"
            className="object-contain"
          />
          <div>
            <h3 className="font-semibold">Total Income</h3>
            <p className="text-lg">{formatCurrency(totalIncome)}</p>
          </div>
        </div>
        <div
          className="p-4 rounded-lg flex justify-around"
          style={{ ...styles.expense }}
        >
          <img
            src={icons.arrowUpSquare}
            width={40}
            alt="Expense Icon"
            className="object-contain"
          />
          <div>
            <h3 className="font-semibold">Total Expense</h3>
            <p className="text-lg">{formatCurrency(totalExpense)}</p>
          </div>
        </div>
        <div
          className="p-4 rounded-lg flex justify-around"
          style={{ ...styles.profit }}
        >
          <img
            src={icons.plus}
            width={40}
            className="object-contain"
            alt="Profit Icon"
          />
          <div>
            <h3 className="font-semibold">Profit</h3>
            <p className="text-lg">{formatCurrency(profit)}</p>
          </div>
        </div>
      </div>

      {/* Additional Statistics Boxes */}
      <h2 className="text-xl font-semibold mt-6 mb-4">Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg" style={{ ...styles.additionalStats }}>
          <FaChartLine
            size={30}
            className="text-green-500"
            style={styles.icon}
          />
          <div>
            <h3 className="font-semibold">Best Week</h3>
            <p className="text-lg text-green-500">{formatCurrency(bestWeek)}</p>
          </div>
        </div>
        <div className="rounded-lg" style={{ ...styles.additionalStats }}>
          <FaRegHourglass
            size={30}
            className="text-yellow-500"
            style={styles.icon}
          />
          <div>
            <h3 className="font-semibold">Average Value</h3>
            <p className="text-lg text-yellow-500">{formatCurrency(averageValue)}</p>
          </div>
        </div>
        <div className="rounded-lg" style={{ ...styles.additionalStats }}>
          <FaChartPie size={30} className="text-red" style={styles.icon} />
          <div>
            <h3 className="font-semibold">Worst Week</h3>
            <p className="text-lg text-error">{formatCurrency(worstWeek)}</p>
          </div>
        </div>
        <div className="rounded-lg" style={{ ...styles.additionalStats }}>
          <FaClipboardList
            size={30}
            className="text-blue-500"
            style={styles.icon}
          />
          <div>
            <h3 className="font-semibold">Transactions</h3>
            <p className="text-lg text-blue-500">{transactions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
