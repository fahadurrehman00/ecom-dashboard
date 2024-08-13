import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

const CustomDropdown = ({ options, selectedValues, onSelect, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleOptionClick = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleRemoveTag = (tag) => {
    onRemove(tag);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      const newTag = inputValue.trim();
      if (newTag !== "" && !selectedValues.includes(newTag)) {
        onSelect(newTag);
        setInputValue("");
      }
    } else if (event.key === "Backspace" && inputValue === "") {
      handleRemoveTag(selectedValues[selectedValues.length - 1]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="border border-gray-300 rounded-md p-3 w-full cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-wrap gap-1">
          {selectedValues.map((value, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-md px-2 py-1 flex items-center gap-1 transition-all duration-300">
              {value}
              <IoMdClose
                className="cursor-pointer"
                onClick={() => handleRemoveTag(value)}
              />
            </span>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
            className="focus:outline-none flex-grow"
            placeholder="Type to add..."
          />
        </div>
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

const ProductDetailsCard = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [customTags, setCustomTags] = useState("");
  const [customTagList, setCustomTagList] = useState([]);
  const options = [
    { value: "Published", label: "Published" },
    { value: "Draft", label: "Draft" },
    { value: "Scheduled", label: "Scheduled" },
  ];

  const handleSelect = (value) => {
    if (!selectedValues.includes(value)) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedValues((prevValues) =>
      prevValues.filter((value) => value !== tag)
    );
  };

  const handleCustomTagChange = (event) => {
    setCustomTags(event.target.value);
  };

  const handleCustomTagKeyPress = (event) => {
    if (event.key === "Enter") {
      const newTags = customTags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "" && !customTagList.includes(tag));
      setCustomTagList((prevValues) => [...prevValues, ...newTags]);
      setCustomTags("");
    }
  };

  const handleRemoveCustomTag = (tag) => {
    setCustomTagList((prevValues) =>
      prevValues.filter((value) => value !== tag)
    );
  };

  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            <h2>Product Details</h2>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-base">Categories</label>
          <div className="mt-2">
            <CustomDropdown
              options={options}
              selectedValues={selectedValues}
              onSelect={handleSelect}
              onRemove={handleRemoveTag}
            />
          </div>
          <div className="text-gray-400 text-xs mt-2">
            Set the product status.
          </div>
        </div>
        <div>
          <a
            href="#"
            className="bg-blue-100 text-blue-600 p-3 flex items-center w-fit font-medium rounded-xl my-3 hover:bg-blue-600 hover:text-white transition-all">
            <GoPlus className="mr-1" />
            create new category
          </a>
        </div>
        <div>
          <label className="text-base">Custom Tags</label>
          <div className="mt-2 flex flex-wrap gap-1">
            {customTagList.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-md px-2 py-1 flex items-center gap-1 transition-all duration-300">
                {tag}
                <IoMdClose
                  className="cursor-pointer"
                  onClick={() => handleRemoveCustomTag(tag)}
                />
              </span>
            ))}
            <input
              type="text"
              value={customTags}
              onChange={handleCustomTagChange}
              onKeyPress={handleCustomTagKeyPress}
              className="border border-gray-200 p-3 w-full rounded-md flex items-center gap-1 transition-all duration-300 outline-gray-200 focus:outline-none"
              placeholder="Add custom tags separated by commas"
            />
          </div>
          <div className="text-gray-400 text-xs mt-2">
            Add custom tags separated by commas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
