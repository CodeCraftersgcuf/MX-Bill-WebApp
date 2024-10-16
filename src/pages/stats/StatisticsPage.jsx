import React, { useState } from 'react';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import StatsNavigation from '../../components/Statistics/StatsNavigation';
import StatsGraph from '../../components/Statistics/StatsGraph';
import Summary from '../../components/Statistics/StatsSummary'; // Import the Summary component

const StatisticsPage = () => {
    const [period, setPeriod] = useState('Month');
  
    const data = {
      Month: {
        income: [1500, 2100, 1800, 3500, 8200],
        expense: [1200, 1600, 2200, 3100, 3700],
      },
      Quarter: {
        income: [3000, 2100, 6000],
        expense: [2000, 3100, 4200],
      },
      Year: {
        income: [8000, 12000, 15000, 18000, 20000, 23000, 25000, 27000, 30000, 32000, 35000, 38000],
        expense: [7000, 11000, 13500, 17500, 19000, 22000, 24000, 26000, 28000, 30000, 32000, 35000],
      },
      YTY: {
        income: [10000, 14500, 18000, 22000],
        expense: [8000, 12000, 16000, 21000],
      }
    };
  
    const currentData = data[period];
  
    // Calculate additional statistics
    const bestWeek = Math.max(...currentData.income); // Best week calculation
    const averageValue = currentData.income.reduce((a, b) => a + b, 0) / currentData.income.length; // Average income
    const worstWeek = Math.min(...currentData.income); // Worst week calculation
    const transactions = currentData.income.length; // Total number of weeks/transactions
  
    return (
      <div className="min-h-screen flex">
        <LeftSideBar />
        <section className="flex-grow p-4">
          <StatsNavigation period={period} setPeriod={setPeriod} />
          <StatsGraph income={currentData.income} expense={currentData.expense} period={period} />

          {/* Include the Summary component */}
          <Summary 
            income={currentData.income} 
            expense={currentData.expense} 
            bestWeek={bestWeek} 
            averageValue={averageValue} 
            worstWeek={worstWeek} 
            transactions={transactions} 
          />
        </section>
        <RightSideBar />
      </div>
    );
};

export default StatisticsPage;
