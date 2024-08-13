import React from "react";
import { useDropzone } from "react-dropzone";
import { LiaFileUploadSolid } from "react-icons/lia";

const MediaCard = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div>
      <div className="p-9 border border-solid border-gray-200 shadow-md rounded-md bg-white relative">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">
            <h2>Media</h2>
          </div>
        </div>
        <div
          {...getRootProps()}
          className={`p-6 border-2 border-dashed border-blue-500 rounded-md cursor-pointer mt-4 ${
            isDragActive ? "bg-gray-100" : "bg-blue-50"
          }`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <div className="flex items-center gap-1">
              <LiaFileUploadSolid className=" text-5xl text-blue-500" />

              <div>
                <p className="font-medium ">
                  Drop files here or click to upload
                </p>
                <div className="text-gray-400 text-xs mt-2">
                  Upload Upto 10 files.
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-gray-400 text-xs mt-2">
          Set the product media gallery.
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
