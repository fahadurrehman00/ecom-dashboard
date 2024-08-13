import React from "react";
import RecentItemOrders from "../Common/RecentItemOrders";
import glovesImage from "../../assets/gloves.svg";

const GlovesOrders = () => {
  const items = [
    {
      image: glovesImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: glovesImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: glovesImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
  ];

  return <RecentItemOrders items={items} />;
};

export default GlovesOrders;
