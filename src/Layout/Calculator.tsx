import React, { useState } from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState<string[]>([]);
  const isLastCharOperator = /[*/+-]$/.test(input);

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        const resTemp = eval(input).toString();
        if (resTemp === "Infinity" || isNaN(resTemp)) {
          setInput("Error");
          setInput("Error");
        } else {
          if (input !== resTemp) {
            setInput(resTemp);
            setHistory((prevHistory) => [
              ...prevHistory,
              `${input} = ${resTemp}`,
            ]);
          }
        }
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("0");
    } else if (value === "Del") {
      setInput((prevInput) =>
        prevInput.length === 1 ? "0" : prevInput.slice(0, -1)
      );
    } else {
      if (isLastCharOperator && /[*/+-]/.test(value)) {
        setInput((prevInput) => prevInput.slice(0, -1) + value);
      } else {
        setInput((prevInput) =>
          prevInput === "0" ? value : prevInput + value
        );
      }
    }
  };

  return (
    <div className="flex justify-center pt-12">
      <div className="calculator bg-black rounded-xl">
        <div className="header-background flex rounded-t-xl p-4">
          <div className="w-1/3 text-2xl text-white max-h-32 overflow-y-auto">
            {history.map((value, index) => (
              <div key={index} className="">
                {value}
              </div>
            ))}
          </div>
          <div className="w-2/3 self-end text-right text-3xl text-white">
            {input}
          </div>
        </div>
        <div className="buttons-wrapper">
          <div className="buttons">
            <Button
              text="C"
              color="gray"
              handleButtonClick={() => handleButtonClick("C")}
            />
            <Button
              text="Del"
              color="gray"
              handleButtonClick={() => handleButtonClick("Del")}
            />
            <Link to="/support">
              <Button text="?" color="brown" />
            </Link>
            <Button
              text="/"
              color="orange"
              handleButtonClick={() => handleButtonClick("/")}
            />
            <Button
              text="1"
              color="gray"
              handleButtonClick={() => handleButtonClick("1")}
            />
            <Button
              text="2"
              color="gray"
              handleButtonClick={() => handleButtonClick("2")}
            />
            <Button
              text="3"
              color="gray"
              handleButtonClick={() => handleButtonClick("3")}
            />
            <Button
              text="X"
              color="orange"
              handleButtonClick={() => handleButtonClick("*")}
            />
            <Button
              text="4"
              color="gray"
              handleButtonClick={() => handleButtonClick("4")}
            />
            <Button
              text="5"
              color="gray"
              handleButtonClick={() => handleButtonClick("5")}
            />
            <Button
              text="6"
              color="gray"
              handleButtonClick={() => handleButtonClick("6")}
            />
            <Button
              text="-"
              color="orange"
              handleButtonClick={() => handleButtonClick("-")}
            />
            <Button
              text="7"
              color="gray"
              handleButtonClick={() => handleButtonClick("7")}
            />
            <Button
              text="8"
              color="gray"
              handleButtonClick={() => handleButtonClick("8")}
            />
            <Button
              text="9"
              color="gray"
              handleButtonClick={() => handleButtonClick("9")}
            />
            <Button
              text="+"
              color="orange"
              handleButtonClick={() => handleButtonClick("+")}
            />
            <Button
              text="0"
              color="gray"
              variant="large"
              handleButtonClick={() => handleButtonClick("0")}
            />
            <Button
              text="="
              color="orange"
              variant="large"
              handleButtonClick={() => handleButtonClick("=")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
