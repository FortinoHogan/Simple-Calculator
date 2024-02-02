import React from "react";

const Ticket = () => {
  return (
    <div className="flex flex-col justify-center items-center h-5/6">
      <div className="text-orange-400 text-4xl font-semibold mb-8 text-center">
        Thank you for sending us your report, we will track the problem now
      </div>
      <div className="text-gray-400 text-3xl">
        ticket number:{" "}
        <span className="text-white">
          {Math.floor(Math.random() * 9999) + 1}
        </span>
      </div>
    </div>
  );
};

export default Ticket;
