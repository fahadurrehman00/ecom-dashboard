import React from "react";
import { BsArrowDownShort } from "react-icons/bs";

const CardWrapper3 = () => {
  return (
    <div>
      <div className="p-4 border-solid border border-gray-100 rounded-xl shadow-md flex flex-col justify-between h-full gap-6">
        <div className="dollars text-3xl flex flex-col">
          <div className="flex items-center">
            <span>9,700</span>

            <span className="bg-red-100 text-red-400 inline-flex items-center text-sm py-0.5 px-1 rounded-lg ml-2">
              <BsArrowDownShort />
              2.2%
            </span>
          </div>
          <p className="text-gray-500 text-sm font-semibold	">
            Order this Months
          </p>
        </div>
        <div className="graph flex items-center gap-2.5">
          <div className="flex flex-col items-center mt-3 w-full">
            <div className="flex justify-between w-full mb-2 m-auto">
              <span className="text-gray-500 font-bold text-base">
                1048 to Goal
              </span>
              <span className="text-gray-500 font-bold text-base">60%</span>
            </div>
            <div className="h-2 mx-3 w-full bg-green-200 rounded-md">
              <div
                className="bg-green-600 rounded-md h-2 w-8/12"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}></div>
            </div>
          </div>
          {/* <img src={progrss} alt="Progress Bar" /> */}
        </div>
      </div>
    </div>
  );
};

export default CardWrapper3;
