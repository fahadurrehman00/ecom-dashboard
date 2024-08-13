import React from "react";
import RecentItemOrders from "../Common/RecentItemOrders";
import watchImage from "../../assets/watch.svg";

const WatchOrders = () => {
  const items = [
    {
      image: watchImage,
      name: "Watch",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: watchImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: watchImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: watchImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
  ];

  return <RecentItemOrders items={items} />;
};

export default WatchOrders;
