import React from "react";
import RecentItemOrders from "../Common/RecentItemOrders";
import shoesImage from "../../assets/shoes.svg";

const ShoesOrders = () => {
  const items = [
    {
      image: shoesImage,
      name: "Shoes",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: shoesImage,
      name: "Shoes",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: shoesImage,
      name: "Shoes",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
    {
      image: shoesImage,
      name: "Shoes",
      code: "#GM-001",
      quantity: "x1",
      price: "$299.99",
      totalPrice: "$299.99",
    },
  ];

  return <RecentItemOrders items={items} />;
};

export default ShoesOrders;
