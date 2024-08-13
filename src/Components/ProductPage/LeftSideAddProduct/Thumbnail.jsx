import React, { useState } from "react";
import gallaryBlankImage from "../../../assets/blank-image.svg";
const Thumbnail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="flex flex-col relative border border-solid border-gray-200 shadow-md py-4 rounded-md bg-white">
        <div className="flex justify-between items-stretch flex-wrap min-h-16 px-9">
          <div className="font-medium text-xl flex items-center m-2 ml-0">
            <h1>Thumbnail</h1>
          </div>
        </div>
        <div className="text-center py-8 px-9 pt-0">
          <div
            onClick={() => document.getElementById("file-input").click()}
            style={{
              backgroundImage: `url(${
                selectedImage ? selectedImage : gallaryBlankImage
              })`,
            }}
            className="inline-block bg-no-repeat bg-cover rounded-md mb-3 h-36 w-36 shadow-md bg-image relative cursor-pointer">
            {selectedImage && (
              <span
                onClick={handleRemoveImage}
                className="absolute transform-translate cursor-pointer left-full -bottom-4 inline-flex justify-center rounded-full bg-slate-100">
                ❌
              </span>
            )}
            <input
              id="file-input"
              type="file"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className="text-gray-400 text-xs">
            Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
            files are accepted
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
