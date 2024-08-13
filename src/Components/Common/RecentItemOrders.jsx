import React from "react";
import PropTypes from "prop-types";
import OrderList from "./OrderList";

const RecentItemOrders = ({ items }) => {
  if (!items || items.length === 0) {
    return <div>No recent orders found.</div>;
  }

  return (
    <div className="block transition-opacity w-full">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="py-4 text-left">ITEM</th>
            <th className=" text-right">QTY</th>
            <th className="text-right">PRICE</th>
            <th className="text-right">TOTAL PRICE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <OrderList key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

RecentItemOrders.propTypes = {
  items: PropTypes.array.isRequired,
};

RecentItemOrders.defaultProps = {
  items: [],
};

export default RecentItemOrders;
