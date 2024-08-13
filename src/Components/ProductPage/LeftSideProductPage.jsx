import React from "react";
import Thumbnail from "./LeftSideAddProduct/Thumbnail";
import StatusCard from "./LeftSideAddProduct/StatusCard";
import ProductDetailsCard from "./LeftSideAddProduct/ProductDetailsCard";
import WeeklySalesCard from "./LeftSideAddProduct/WeeklySalesCard";
import ProductTemplateCard from "./LeftSideAddProduct/ProductTemplateCard";

const LeftSideProductPage = () => {
  return (
    <div>
      <form className="grid">
        <div className="formLeftSide col-span-1 flex flex-col gap-6">
          <Thumbnail />
          <StatusCard />
          <ProductDetailsCard />
          <WeeklySalesCard />
          <ProductTemplateCard />
        </div>
      </form>
    </div>
  );
};

export default LeftSideProductPage;
