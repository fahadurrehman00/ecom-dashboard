import React from "react";
import { FaFilter } from "react-icons/fa";
import DashboardHeader from "../Dashboard/DashboardHeader";
import LeftSideProductPage from "../ProductPage/LeftSideProductPage";
import RightSideProductPage from "../ProductPage/RightSideProductPage";

const AddProductPage = () => {
  return (
    <div className="mx-20">
      <DashboardHeader
        title="Product Form"
        subtitle="Home - eCommerce - Catalog"
        primaryButtonLabel="Filter"
        primaryButtonIcon={<FaFilter />}
        secondaryButtonLabel="Create"
      />
      <div>
        <div className="grid grid-cols-3 gap-8">
          <LeftSideProductPage />
          <RightSideProductPage />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
