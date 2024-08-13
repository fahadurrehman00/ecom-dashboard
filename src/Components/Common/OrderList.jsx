import React from "react";

const OrderList = ({ item }) => {
  return (
    <tr>
      <td>
        <img className="w-50" src={item.image} alt={item.name} />
      </td>
      <td className="py-4">
        <a
          href="#"
          className="font-bold text-start hover:text-blue-500 cursor-pointer">
          {item.name}
        </a>
        <span className="text-gray-400 font-semibold block text-start text-sm">
          Item: {item.code}
        </span>
      </td>
      <td>
        <span className="font-bold block text-right">{item.quantity}</span>
      </td>
      <td>
        <span className="font-bold block">{item.price}</span>
      </td>
      <td>
        <span className="font-bold block">{item.totalPrice}</span>
      </td>
    </tr>
  );
};

export default OrderList;
