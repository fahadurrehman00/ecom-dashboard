import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import DatePicker from "react-tailwindcss-datepicker";

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

const StatusCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const options = [
    { value: "Published", label: "Published", color: "bg-green-500" },
    { value: "Draft", label: "Draft", color: "bg-blue-500" },
    { value: "Scheduled", label: "Scheduled", color: "bg-yellow-500" },
    { value: "Inactive", label: "Inactive", color: "bg-red-500" },
  ];

  const getColor = (value) => {
    const option = options.find((opt) => opt.value === value);
    return option ? option.color : "bg-green-500";
  };

  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            <h2>Status</h2>
          </div>
          <div className="flex items-center">
            <div
              className={`${getColor(
                selectedValue
              )} rounded-full h-4 w-4`}></div>
          </div>
        </div>
        <div className="mt-4">
          <CustomDropdown
            options={options}
            selectedValue={selectedValue}
            onChange={(value) => setSelectedValue(value)}
          />
        </div>
        <div className="mt-9">
          {selectedValue === "Scheduled" && (
            <div>
              <label className="text-base">Select publishing date</label>
              <DatePicker
                asSingle={true}
                useRange={false}
                selected={selectedDateTime}
                value={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                placeholderText="Select Date"
                inputClassName="border border-gray-300 rounded-lg p-2 mt-2 bg-white text-black w-full"
              />
            </div>
          )}
        </div>
        <div className="text-gray-400 text-xs mt-2">
          Set the product status.
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
