import React, { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";

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
        {selectedValue || "Select Option"}
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

const PricingCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "Tax Free", label: "Tax Free" },
    { value: "Taxable Goods", label: "Taxable Goods" },
    { value: "Download Product", label: "Download Product" },
  ];
  const [selectedDiscountType, setSelectedDiscountType] =
    useState("noDiscount");
  const [value, setValue] = useState(50);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            <h2>Pricing</h2>
          </div>
        </div>
        <div className="my-4">
          <label className="text-base font-medium">Best Price</label>
          <input
            placeholder="Product Name"
            type="text"
            className="w-full border border-solid rounded-lg p-3 focus:outline-none mt-2"
          />
          <div className="text-gray-400 text-xs mt-2">
            Set the product price.
          </div>
        </div>
        <div>
          <div>
            <label className="text-base font-medium">Discount Type</label>
            <div className="flex gap-3 items-center mt-2 justify-between">
              <div
                onClick={() => setSelectedDiscountType("noDiscount")}
                className={`p-7 border border-dashed rounded-lg flex items-center gap-3 font-medium w-full cursor-pointer ${
                  selectedDiscountType === "noDiscount"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}>
                <GrRadialSelected
                  className={`${
                    selectedDiscountType === "noDiscount"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                No Discount
              </div>
              <div
                onClick={() => setSelectedDiscountType("percentage")}
                className={`p-7 border border-dashed rounded-lg flex items-center gap-3 font-medium w-full cursor-pointer ${
                  selectedDiscountType === "percentage"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}>
                <GrRadialSelected
                  className={`${
                    selectedDiscountType === "percentage"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                Percentage %
              </div>
              <div
                onClick={() => setSelectedDiscountType("fixedPrice")}
                className={`p-7 border border-dashed rounded-lg flex items-center gap-3 font-medium w-full cursor-pointer ${
                  selectedDiscountType === "fixedPrice"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}>
                <GrRadialSelected
                  className={`${
                    selectedDiscountType === "fixedPrice"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                Fixed Price
              </div>
            </div>
          </div>
          <div className="mt-4">
            {selectedDiscountType === "percentage" && (
              <div className="PercentagePart">
                <label className="text-base font-medium">
                  Set Discount Percentage
                </label>
                <div>
                  <div className="flex justify-center mb-2">
                    <div className="text-5xl font-medium">{value}</div>
                    <span>%</span>
                  </div>
                  <input
                    className="w-full range-slider"
                    id="typeinp"
                    type="range"
                    value={value}
                    min="0"
                    max="100"
                    defaultValue="50"
                    step="1"
                    onChange={handleSliderChange}
                    style={{
                      background: `linear-gradient(to right, #007bff ${value}%, #e0e0e0 ${value}%)`,
                    }}
                  />
                </div>
                <div className="text-gray-400 text-xs mt-2">
                  Set a percentage discount to be applied on this product.
                </div>
              </div>
            )}
            {selectedDiscountType === "fixedPrice" && (
              <div className="FixedDiscountedPrice">
                <label className="text-base font-medium">
                  Fixed Discounted Price
                </label>
                <input
                  placeholder="Discounted price"
                  type="text"
                  className="w-full border border-solid rounded-lg p-3 focus:outline-none mt-2"
                />
                <div className="text-gray-400 text-xs mt-2">
                  Set the discounted product price. The product will be reduced
                  at the determined fixed price
                </div>
              </div>
            )}
          </div>
          <div className="mt-9">
            <form className="grid">
              <div className="flex items-center w-full justify-between gap-4">
                <div className="w-full">
                  <label className=" text-base">Tax Class</label>
                  <div className="mt-2">
                    <CustomDropdown
                      options={options}
                      selectedValue={selectedValue}
                      onChange={(value) => setSelectedValue(value)}
                    />
                  </div>
                  <div className="text-gray-400 text-xs mt-2">
                    Set the product tax class.
                  </div>
                </div>
                <div className="w-full">
                  <label className=" text-base">VAT Amount (%) </label>
                  <input
                    type="text"
                    className="w-full border border-solid rounded-lg p-3 focus:outline-none mt-2"
                  />
                  <div className="text-gray-400 text-xs mt-2">
                    Set the product VAT amount.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
