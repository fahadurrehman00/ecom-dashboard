import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SalesChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58], // Example data, replace with actual data
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: " ",
        align: "left",
      },
      subtitle: {
        text: " ",
        align: "left",
      },
      labels: [
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
        "Apr 04",
      ],
      xaxis: {
        type: "",
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        horizontalAlign: "right",
      },
    },
  });

  return (
    <div className="p-4 border-solid border border-gray-100 rounded-xl shadow-md">
      <div className="mb-5">
        <h3>Sale This Month</h3>
        <p className="text-gray-500 text-sm">User for all Channels</p>
      </div>
      <div className="dollars text-3xl flex items-center">
        <sup className="text-gray-500 text-sm align-super">$</sup>69,700
      </div>
      <p className="text-gray-500 text-sm">Another $48,589 to Goal</p>
      <div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default SalesChart;
