import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const GeneralCard = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            <h2>General</h2>
          </div>
        </div>
        <div className="my-4">
          <label className="text-base">Product Name</label>
          <input
            placeholder="Product Name"
            type="text"
            className="w-full border border-solid rounded-lg p-3 focus:outline-none mt-2"
          />
          <div className="text-gray-400 text-xs mt-2">
            A product name is required and recommended to be unique.
          </div>
        </div>
        <div>
          <div>
            <label className="text-base mt-2 rounded-lg">Description</label>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              modules={{
                toolbar: [
                  [{ font: [] }, { header: [1, 2, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
              formats={[
                "font",
                "header",
                "bold",
                "italic",
                "underline",
                "list",
                "bullet",
                "link",
                "image",
              ]}
              className="mt-2 mb-14 h-72"
            />
          </div>
        </div>
        <div className="text-gray-400 text-xs">
          A product name is required and recommended to be unique.
        </div>
      </div>
    </div>
  );
};

export default GeneralCard;
