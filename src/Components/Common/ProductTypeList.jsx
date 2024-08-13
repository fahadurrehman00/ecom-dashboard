import React, { useState } from "react";
import ProductType from "./ProductType";

const ProductTypeList = ({ productTypes, onProductTypeClick }) => {
  const [activeProduct, setActiveProduct] = useState(productTypes[0].name);

  const handleProductTypeClick = (name) => {
    setActiveProduct(name);
    onProductTypeClick(name);
  };

  return (
    <div className="flex items-center gap-5">
      {productTypes.map((product, index) => (
        <ProductType
          key={index}
          image={product.image}
          name={product.name}
          onClick={() => handleProductTypeClick(product.name)}
          isActive={activeProduct === product.name}
        />
      ))}
    </div>
  );
};

export default ProductTypeList;
