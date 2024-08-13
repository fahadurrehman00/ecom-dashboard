import React from "react";
import progresschart from "../../assets/Column.svg";
import { BsArrowUpShort } from "react-icons/bs";

const CardWrapper2 = () => {
  return (
    <div>
      <div className="px-30 pt-30 h-full border-solid border border-gray-100 rounded-xl shadow-md flex justify-between flex-col	">
        <div>
          <div className="dollars text-3xl flex items-center">
            <sup className="text-gray-500 text-sm align-super">$</sup>69,700
            <span className="text-sm text-green-600 bg-green-300 rounded-md px-2 py-0.5 ml-2 flex items-center">
              <BsArrowUpShort />
              2.2%
            </span>
          </div>
          <p className="text-gray-500 text-sm font-semibold	">
            Average Daily Earning
          </p>
          <div className="graph flex items-center gap-2.5"></div>
        </div>
        <div className="flex justify-center">
          <img src={progresschart} alt="Chart" />
        </div>
      </div>
    </div>
  );
};

export default CardWrapper2;
