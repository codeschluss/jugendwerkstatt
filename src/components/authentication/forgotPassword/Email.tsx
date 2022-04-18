import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSendPasswordResetMutation } from "../../../GraphQl/graphql";
import useInput from "../../../hooks/use-input";
import Button from "../../ui/Button";
import AuthInput from "../AuthInput";

const Email: React.FC = () => {
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput(
    (value: any) => value.includes("@") && value !== "" && value.includes(".")
  );

  const [sendPasswordResetMutation, { data, loading, error }] =
    useSendPasswordResetMutation({
      variables: {
        email: enteredEmail,
      },
    });

  const submitHandler = () => {
    sendPasswordResetMutation();
    resetEmailInput();
  };

  useEffect(() => {
    if (data?.sendPasswordReset === true) {
      navigate("/forgot-password/password");
    }
  });

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex justify-between flex-col   mt-16 p-2"
      >
        <AuthInput
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          placeholder="E-Mail Adresse"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />

        <Button
          isValidated={enteredEmailValidity}
          isDisabled={!emailInputError}
          buttonType={"submit"}
        >
          Senden
        </Button>
      </form>
    </>
  );
};

export default Email;
