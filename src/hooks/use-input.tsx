import { useState } from "react";

const useInput = (inputValidation: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isBlured, setIsBlured] = useState(false);

  const validValue = inputValidation(enteredValue);
  const hasError = !validValue && isBlured;

  const valueChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsBlured(true);
  };

  const resetValue = () => {
    setEnteredValue("");
    setIsBlured(false);
  };

  return {
    value: enteredValue,
    validity: validValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetValue,
  };
};

export default useInput;
