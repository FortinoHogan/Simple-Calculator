import React from "react";
import { ISubmit } from "../Interfaces/ISubmit";

const SubmitButton = (props: ISubmit) => {
  const { isFormValid, onClick } = props;
  return (
    <div className="absolute right-5 mt-6">
      <button
        className={`py-3 px-9 text-3xl rounded-full ${
          isFormValid ? "bg-orange-400" : "bg-gray-600"
        }`}
        disabled={!isFormValid}
        onClick={onClick}
      >
        SEND
      </button>
    </div>
  );
};

export default SubmitButton;
