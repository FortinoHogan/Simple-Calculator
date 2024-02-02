import React, { useState } from "react";
import SupportPageLeft from "../Fragments/SupportPageLeft";
import SupportPageRight from "../Fragments/SupportPageRight";
import SubmitButton from "../Components/SubmitButton";
import Ticket from "../Layout/Ticket";

const SupportPage = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");
  const [isTicketVisible, setIsTicketVisible] = useState(false);

  const handleFirstNameChange = (value: string) => {
    setFirstname(value);
  };
  const handleLastNameChange = (value: string) => {
    setLastname(value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handleRadioChange = (value: string) => {
    setRadio(value);
  };

  const isFormValid =
    firstName !== "" && lastName !== "" && email !== "" && radio !== "";

  const handleSubmit = () => {
    if (isFormValid) {
      setIsTicketVisible(true);
    }
  };

  return (
    <div className="bg-black h-screen text-white p-6">
      <div className="text-5xl font-semibold">Support Ticket Form</div>
      <div className="h-0.5 bg-white mt-5"></div>
      {isTicketVisible ? (
        <Ticket />
      ) : (
        <div className="h-3/5">
          <div className="flex gap-36 h-full mt-8">
            <SupportPageLeft
              handleFirstnameChange={handleFirstNameChange}
              handleLastnameChange={handleLastNameChange}
              handleEmailChange={handleEmailChange}
              handleRadioChange={handleRadioChange}
            />
            <SupportPageRight />
          </div>
          <SubmitButton isFormValid={isFormValid} onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default SupportPage;
