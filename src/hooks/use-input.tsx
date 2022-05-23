import { useEffect, useState } from "react";

const useInput = (inputValidation: any, initialValue?: any | undefined) => {
  const [enteredValue, setEnteredValue] = useState(
    initialValue ? initialValue : ""
  );
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
