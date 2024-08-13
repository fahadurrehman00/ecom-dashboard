import React, { useState } from "react";
import ProductTypeList from "../Common/ProductTypeList";
import GamingOrders from "../OrdersLists/GamingOrdersList";
import GlovesOrders from "../OrdersLists/GlovesOrdersList";
import TShirtOrderList from "../OrdersLists/TShirtOrderList";
import ShoesOrders from "../OrdersLists/ShoesOrdersList";
import WatchOrders from "../OrdersLists/WatchOrderList";
import tShirt from "../../assets/t-shirt.svg";
import gaming from "../../assets/gaming.svg";
import watch from "../../assets/watch.svg";
import gloves from "../../assets/gloves.svg";
import shoes from "../../assets/shoes.svg";

const RecentOrders = () => {
  const productTypes = [
    { image: tShirt, name: "T-Shirt" },
    { image: gaming, name: "Gaming" },
    { image: watch, name: "Watch" },
    { image: gloves, name: "Gloves" },
    { image: shoes, name: "Shoes" },
  ];

  const [selectedProduct, setSelectedProduct] = useState("T-Shirt");

  const renderRecentItemOrders = () => {
    switch (selectedProduct) {
      case "Gaming":
        return <GamingOrders />;
      case "Gloves":
        return <GlovesOrders />;
      case "Shoes":
        return <ShoesOrders />;
      case "Watch":
        return <WatchOrders />;
      default:
        return <TShirtOrderList />;
    }
  };

  return (
    <div className="p-30 border-solid border border-gray-100 rounded-xl shadow-md h-full flex flex-col">
      <ProductTypeList
        productTypes={productTypes}
        onProductTypeClick={setSelectedProduct}
      />
      <div>{renderRecentItemOrders()}</div>
    </div>
  );
};

export default RecentOrders;
