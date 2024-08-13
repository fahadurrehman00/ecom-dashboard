import React, { useState } from "react";
import GeneralSection from "./RightSideAddProduct/GeneralSection";

const RightSideProductPage = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabClasses = (tabName) => {
    return `text-xl font-medium border-b-2 pb-3 transition-all cursor-pointer ${
      activeTab === tabName
        ? "border-blue-500 text-blue-500"
        : "border-transparent text-gray-400 hover:border-blue-500 hover:text-blue-500"
    }`;
  };

  return (
    <div className="col-span-2">
      <form className="grid gap-4">
        <div className="flex gap-4">
          <div
            className={tabClasses("General")}
            onClick={() => setActiveTab("General")}>
            General
          </div>
          <div
            className={tabClasses("Advanced")}
            onClick={() => setActiveTab("Advanced")}>
            Advanced
          </div>
        </div>
        <div className="formRightSide col-span-2">
          {activeTab === "General" ? (
            <GeneralSection />
          ) : (
            <div>Advanced Content</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RightSideProductPage;
