import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

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
        {selectedValue || "Default"}
        <FaChevronDown />
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

const ProductTemplateCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "Default", label: "Default" },
    { value: "Electronic", label: "Electronic" },
    { value: "Fashion", label: "Fashion" },
  ];
  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            <h2>Product Template</h2>
          </div>
        </div>
        <div className="mt-4">
          <label className=" text-base">Select a product template</label>
          <div className="mt-2 ">
            <CustomDropdown
              options={options}
              selectedValue={selectedValue}
              onChange={(value) => setSelectedValue(value)}
            />
          </div>
          <div className="text-gray-400 text-xs mt-2">
            Set the product status.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTemplateCard;
