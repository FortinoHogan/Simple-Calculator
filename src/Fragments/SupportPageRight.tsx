import React from "react";

const SupportPageRight = () => {
  return (
    <div className="w-1/2 h-full flex flex-col flex-grow">
      <div className="text-2xl relative mb-2">
        Description
        <span className="absolute text-lg text-gray-600 ml-2 bottom-4">
          Optional
        </span>
      </div>
      <div className="border-2 border-white text-white p-4 flex flex-col flex-grow">
        <input
          type="text"
          placeholder="Description Report"
          className="bg-transparent outline-none "
        />
      </div>
    </div>
  );
};

export default SupportPageRight;
