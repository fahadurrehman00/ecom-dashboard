import React from "react";
import RecentItemOrders from "../Common/RecentItemOrders";
import tshirtImage from "../../assets/t-shirt.svg";

const TShirtOrders = () => {
  const items = [
    {
      image: tshirtImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: tshirtImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: tshirtImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: tshirtImage,
      name: "Gaming",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
  ];

  return <RecentItemOrders items={items} />;
};

export default TShirtOrders;
