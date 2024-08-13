import React from "react";
import RecentItemOrders from "../Common/RecentItemOrders";
import gamingImage from "../../assets/gaming.svg";

const GamingOrders = () => {
  const items = [
    {
      image: gamingImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: gamingImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: gamingImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: gamingImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
  ];

  return <RecentItemOrders items={items} />;
};

export default GamingOrders;
