import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import ProductListSection from "./ProductListSection";

const CustomDropdown = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="border border-gray-300 rounded-md p-3 w-full cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}>
        {selectedValue || "Published"}
        <FaChevronDown className="ml-2" />
      </div>
      {isOpen && (
        <div className="absolute border border-gray-300 rounded-md bg-white w-full mt-1 z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-3 hover:text-blue-300 hover:bg-slate-50 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const ProductListPageHeader = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "Published", label: "Published", color: "bg-green-500" },
    { value: "Draft", label: "Draft", color: "bg-blue-500" },
    { value: "Scheduled", label: "Scheduled", color: "bg-yellow-500" },
    { value: "Inactive", label: "Inactive", color: "bg-red-500" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center p-3 bg-gray-100">
            <LuSearch />
            <input
              type="text"
              placeholder="Search Product"
              className="focus:outline-none outline-none bg-gray-100 ml-2 max-w-fit"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div>
            <CustomDropdown
              options={options}
              selectedValue={selectedValue}
              onChange={(value) => setSelectedValue(value)}
            />
          </div>
          <button
            type="button"
            className="py-3 px-4 rounded-lg bg-slate-300	mr-2 hover:bg-blue-500 hover:text-white transition duration:400 ease-in-out flex items-center gap-1">
            Add Product
          </button>
        </div>
      </div>
      <div>
        <ProductListSection />
      </div>
    </div>
  );
};

export default ProductListPageHeader;
