import React from "react";
import DashboardHeader from "../Dashboard/DashboardHeader";
import CardWrapper from "../Dashboard/CardWrapper";
import CardWrapper2 from "../Dashboard/CardWrapper2";
import CardWrapper3 from "../Dashboard/CardWrapper3";
import CardWrapper4 from "../Dashboard/CardWrapper4";
import SalesChart from "../Common/SalesChart";
import RecentOrders from "../Dashboard/RecentOrders";

const HomeDashboard = () => {
  return (
    <div className="main-wrapper mx-100">
      <DashboardHeader
        title="eCommerce Dashboard"
        subtitle="Home - Dashboard"
        primaryButtonLabel="Manage Sales"
        secondaryButtonLabel="Add Product"
        secondaryButtonLink="/addProduct"
      />
      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-9 w-full">
          <CardWrapper />
          <CardWrapper2 />
          <CardWrapper3 />
          <CardWrapper4 />
        </div>
        <div className="w-full">
          <SalesChart />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <RecentOrders />
        <SalesChart />
      </div>
    </div>
  );
};

export default HomeDashboard;
