import React from "react";
import pro1 from "../../assets/300-11.jpg";
import pro2 from "../../assets/300-12.jpg";
import pro3 from "../../assets/300-2.jpg";
const CardWrapper4 = () => {
  return (
    <div>
      <div className="p-4 border-solid border border-gray-100 rounded-xl shadow-md flex flex-col justify-between gap-8 h-full">
        <div className="dollars text-3xl flex flex-col">
          <div>63.7K</div>
          <p className="text-gray-500 text-sm">New Customer This Month</p>
        </div>
        <div className="graph flex items-center gap-2.5"></div>
        <div>
          <h5>Today Heros</h5>
          <div className="flex items-center m-2.5 flex-nowrap">
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-yellow-400">
                <img className="rounded-full" src={pro1} alt="profilePic" />
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-blue-400">
                N
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-red-400">
                <img className="rounded-full" src={pro2} alt="" />
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-orange-400">
                Z
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-yellow-400">
                A
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-red-400">
                <img className="rounded-full" src={pro2} alt="" />
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-gray-400">
                <img className="rounded-full" src={pro3} alt="" />
              </span>
            </div>
            <div className=" cursor-pointer relative z-0 transition-all inline-block flex-shrink ml10">
              <span className="w-9 h-9 rounded-full relative flex items-center justify-center bg-gray-400 text-xs">
                +42
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWrapper4;
