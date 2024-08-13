import React from "react";

const ProductType = ({ image, name, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 flex flex-col items-center justify-between overflow-hidden w-fit h-full relative border ${
        isActive ? "border-solid" : "border-dashed"
      } rounded cursor-pointer`}>
      <div>
        <img src={image} alt={name} />
      </div>
      <span className="font-bold text-base pt-2">{name}</span>
      {isActive && (
        <span className="block absolute h-1 w-full bottom-0 bg-blue-500"></span>
      )}
    </div>
  );
};

export default ProductType;
