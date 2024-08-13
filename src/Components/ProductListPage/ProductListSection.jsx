import React from "react";
import { Checkbox } from "@mui/material";

const ProductListSection = () => {
  return (
    <div>
      <div>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-gray-500" role="row">
              <th>
                <Checkbox />
              </th>
              <th>Product</th>
              <th>SKU</th>
              <th>QTY</th>
              <th>PRICE</th>
              <th>RATing</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListSection;
