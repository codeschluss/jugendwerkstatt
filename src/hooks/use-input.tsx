import { useEffect, useState } from "react";

const useInput = (inputValidation: any, initialValue?: any | undefined) => {
  const [enteredValue, setEnteredValue] = useState(
    initialValue ? initialValue : ""
  );
  const [isBlured, setIsBlured] = useState(false);

  const regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const validValue = inputValidation(enteredValue);
  const hasError = !validValue && isBlured;
  const passwordExtraInputError: boolean =
    !enteredValue.match(regex) && isBlured;

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
    passwordExtraInputError,
    valueChangeHandler,
    inputBlurHandler,
    resetValue,
  };
};

export default useInput;
