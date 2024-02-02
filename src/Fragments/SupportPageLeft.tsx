import React from "react";
import { ISupportLeft } from "../Interfaces/ISupportLeft";

const SupportPageLeft = (props: ISupportLeft) => {
  const {
    handleEmailChange,
    handleFirstnameChange,
    handleLastnameChange,
    handleRadioChange,
  } = props;
  return (
    <div className="flex flex-col w-1/2 h-full">
      <label className="text-2xl mb-2">
        Name <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-10">
        <div className="flex flex-col">
          <input
            type="text"
            id="firstName"
            className="text-2xl rounded-md bg-transparent border-2 border-white p-1"
            onChange={(e) => handleFirstnameChange(e.target.value)}
          />
          <label htmlFor="firstName" className="text-2xl">
            First
          </label>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            id="lastName"
            className="text-2xl rounded-md bg-transparent border-2 border-white p-1"
            onChange={(e) => handleLastnameChange(e.target.value)}
          />
          <label htmlFor="lastName" className="text-2xl">
            Last
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-2xl mb-2 mt-5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="email"
          className="text-2xl rounded-md bg-transparent border-2 border-white p-1"
          onChange={(e) => handleEmailChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <label className="text-2xl mt-5 mb-2">
          Topic <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dotted border-white text-white px-7 pt-8 flex flex-col  flex-grow text-xl">
          What can we help you today?
          <div>
            <input type="radio" id="general" value="general" name="topic" onChange={() => handleRadioChange("general")}/>
            <label htmlFor="general"> General</label>
            <br />
            <input type="radio" id="bug" value="bug" name="topic" onChange={() => handleRadioChange("bug")}/>
            <label htmlFor="bug"> Bug</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPageLeft;
