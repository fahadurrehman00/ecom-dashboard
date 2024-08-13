import React from "react";
import Circularbarr from "../../assets/Radial.svg";
import { BsArrowUpShort } from "react-icons/bs";

const CardWrapper = () => {
  return (
    <div>
      <div className="p-30 border-solid border border-gray-100 rounded-xl	 shadow-md h-full flex flex-col justify-between">
        <div>
          <div className="dollars text-3xl flex items-center pb-0.5">
            <sup className="text-gray-500 text-sm align-super">$</sup>69,700
            <span className="text-sm text-green-600 bg-green-300 rounded-md px-2 py-0.5 ml-2 flex items-center">
              <BsArrowUpShort />
              2.2%
            </span>
          </div>
          <p className="text-gray-500 text-sm font-semibold	">
            Expected Earning
          </p>
        </div>
        <div className="flex items-center flex-wrap">
          <div className="flex justify-center items-center pt-2 mr-5">
            <div className="min-w-16 min-h-16">
              {/* <span></span>
              <canvas className="h-16 w-16"></canvas> */}
              <img src={Circularbarr} alt="CircularBar" />
            </div>
          </div>
          <div className=" flex flex-col justify-center flex-auto">
            <div className="flex items-center font-semibold">
              <div className="bullet w-2 h-1 rounded-md bg-green-400 mr-3"></div>
              <div className="text-gray-400 mr-4 grow">Shoes</div>
              <div className="">$7,569</div>
            </div>
            <div className="flex items-center font-semibold">
              <div className="bullet w-2 h-1 rounded-md bg-red-400 mr-3"></div>
              <div className="text-gray-400 mr-4 grow">Shoes</div>
              <div className="">$7,569</div>
            </div>
            <div className="flex items-center font-semibold">
              <div className="bullet w-2 h-1 rounded-md bg-blue-400 mr-3"></div>
              <div className="text-gray-400 mr-4 grow">Shoes</div>
              <div className="">$7,569</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWrapper;
