import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Report = () => {
  const data = {
    labels: ['SHARMILA R', 'dharunya', 'Shankar','nidhu'], // Replace with your actual data
    datasets: [
      {
        label: 'Books Borrowed',
        data: [12, 19, 3], // Replace with your actual data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Ensure this scale is defined correctly
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Report</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Report;
