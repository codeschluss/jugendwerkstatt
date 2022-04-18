import React from "react";
import useInput from "../../../hooks/use-input";
import Button from "../../ui/Button";
import AuthInput from "../AuthInput";

const Password = () => {
  const regex = /[^A-Za-z0-9_.]/g;
  const {
    value: enteredPassword,
    validity: enteredPasswordValidity,
    hasError: passwordInputError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetValue: resetPasswordInput,
  } = useInput((value: any) => value.match(regex) && value.trim().length > 6);

  return (
    <>
      {" "}
      <form action="" className="flex justify-between flex-col   mt-16 p-2">
        <AuthInput
          value={enteredPassword}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          type="text"
          placeholder="E-Mail Adresse"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <Button
          isValidated={enteredPasswordValidity}
          isDisabled={passwordInputError}
        >
          Senden
        </Button>
      </form>
    </>
  );
};

export default Password;
