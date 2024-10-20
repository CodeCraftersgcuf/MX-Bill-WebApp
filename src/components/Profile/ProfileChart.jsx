import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const ProfileChart = ({ userStates = {}, user = {} }) => {
  const chartData = {
    labels: ['Savings', 'Checking', 'Investments', 'Credit', 'Loans'],
    datasets: [
      {
        label: 'Account Balances',
        data: [
          userStates.savings || 0,
          userStates.checking || 0,
          userStates.investments || 0,
          userStates.credit || 0,
          userStates.loans || 0,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(153, 102, 255, 0.6)', // Purple
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow height to adjust based on container
    cutout: '70%', // Doughnut hole
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
    },
  };

  return (
    <div className=" bg-white p-5 rounded-lg shadow-md ">
      {/* Chart Section */}
      <div className=" w-full">
        <h2 className="text-xl text-center font-bold mb-2">Account Overview</h2>

        {/* Custom Legend */}
        <div className="flex items-center justify-center mb-4 space-x-4 flex-wrap">
          {['Savings', 'Checking', 'Investments', 'Credit', 'Loans'].map((label, index) => (
            <div className="flex items-center" key={index}>
              <div
                className={`w-3 h-3 rounded-full mr-1 ${
                  index === 0
                    ? 'bg-blue-400'
                    : index === 1
                    ? 'bg-yellow-400'
                    : index === 2
                    ? 'bg-green-400'
                    : index === 3
                    ? 'bg-red'
                    : 'bg-purple-400'
                }`}
              ></div>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="w-full" >
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProfileChart;
