import React from "react";

const WeeklySalesCard = () => {
  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div>
          <div className="font-medium text-lg">
            <h2>Weekly Sales</h2>
          </div>

          <div className="text-gray-400 text-xs mt-4">
            No data available. Sales data will begin capturing once product has
            been published.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySalesCard;
