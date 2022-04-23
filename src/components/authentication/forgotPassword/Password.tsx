import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../../GraphQl/graphql";
import useInput from "../../../hooks/use-input";
import Button from "../../ui/Button";
import AuthInput from "../AuthInput";

const Password = () => {
  const [errorText, setErrorText] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const regex = /[^A-Za-z0-9_.]/g;

  const {
    value: enteredPassword,
    validity: enteredPasswordValidity,
    hasError: passwordInputError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetValue: resetPasswordInput,
  } = useInput((value: any) => value.match(regex) && value.trim().length > 6);
  const {
    value: enteredCPassword,
    validity: enteredCPasswordValidity,
    hasError: cPasswordInputError,
    valueChangeHandler: cPasswordChangeHandler,
    inputBlurHandler: cPasswordBlurHandler,
    resetValue: resetCPasswordInput,
  } = useInput((value: any) => value === enteredPassword);

  const [resetPassword, { data, loading, error }] = useResetPasswordMutation({
    variables: { key: params.id, password: enteredPassword },
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    resetPassword();
  };

  useEffect(() => {
    if (data?.resetPassword === true) {
      resetPasswordInput();
      resetCPasswordInput();
      navigate("/");
    }
  }, [data]);

  return (
    <>
      {" "}
      <form
        onSubmit={submitHandler}
        className="flex justify-between flex-col   mt-16 p-2"
      >
        <AuthInput
          value={enteredPassword}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          error={passwordInputError ? "password not strong enough" : ""}
          type="password"
          placeholder="Neuer Password"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <AuthInput
          value={enteredCPassword}
          onBlur={cPasswordBlurHandler}
          onChange={cPasswordChangeHandler}
          error={cPasswordInputError ? "must be a valid email address" : ""}
          type="password"
          placeholder="Neuer Password wiederholen"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <Button
          isValidated={enteredPasswordValidity && enteredCPasswordValidity}
          isDisabled={!passwordInputError && !cPasswordInputError}
          buttonType={"submit"}
        >
          Senden
        </Button>
      </form>
    </>
  );
};

export default Password;
