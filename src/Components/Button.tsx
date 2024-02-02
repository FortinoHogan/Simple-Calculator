import React from "react";
import { IButton } from "../Interfaces/IButton";

const Button = (props: IButton) => {
  const { text, color, variant, handleButtonClick } = props;

  let buttonClass = "";
  if (color === "gray") {
    buttonClass = "button-gray";
  } else if (color === "orange") {
    buttonClass = "button-orange";
  } else if (color === "brown") {
    buttonClass = "button-brown";
  }

  if (variant === "large") {
    buttonClass += " large-button text-3xl";
  } else {
    buttonClass += " button text-3xl";
  }

  return <button className={buttonClass} onClick={handleButtonClick}>{text}</button>;
};

export default Button;
