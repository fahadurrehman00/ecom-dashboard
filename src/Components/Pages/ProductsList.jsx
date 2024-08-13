import React from "react";
import DashboardHeader from "../Dashboard/DashboardHeader";
import { FaFilter } from "react-icons/fa";
import ProductListPageHeader from "../ProductListPage/ProductListPageHeader";

const ProductsList = () => {
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
        <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white ">
          <ProductListPageHeader />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
