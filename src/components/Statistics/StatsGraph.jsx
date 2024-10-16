import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StatsGraph = ({ income, expense, period }) => {
  const getLabels = () => {
    switch (period) {
      case 'Month':
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      case 'Quarter':
        return ['Q1', 'Q2', 'Q3'];
      case 'Year':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      case 'YTY':
        return ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
      default:
        return [];
    }
  };

  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Income',
        data: income,
        borderColor: 'rgba(54, 162, 235, 1)', // Line color for Income
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Shaded background under the Income line
        tension: 0.4,
        fill: true, // Fill the area under the line
      },
      {
        label: 'Expense',
        data: expense,
        borderColor: 'rgba(255, 99, 132, 1)', // Line color for Expense
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Shaded background under the Expense line
        tension: 0.4,
        fill: true, // Fill the area under the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-96 shadow-lg rounded-lg overflow-hidden bg-white mt-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default StatsGraph;
