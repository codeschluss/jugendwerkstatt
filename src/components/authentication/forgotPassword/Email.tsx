import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { useSendPasswordResetMutation } from "../../../GraphQl/graphql";
import useInput from "../../../hooks/use-input";
import Button from "../../ui/Button";
import AuthInput from "../AuthInput";

const Email: React.FC = () => {
  const [errorText, setErrorText] = useState(false);
  const { setTempEmail } = useContext(AuthContext);
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

  const submitHandler = (e: any) => {
    e.preventDefault();
    sendPasswordResetMutation();
    resetEmailInput();
  };

  useEffect(() => {
    if (data?.sendPasswordReset === true) {
      setTempEmail(enteredEmail);
      navigate("/reVerifyEmail");
    } else if (error) {
      setErrorText(true);
    }
  }, [data, error]);

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
          error={emailInputError ? "must be a valid email address" : ""}
          placeholder="E-Mail Adresse"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        {errorText && (
          <p className="text-primary">
            {" "}
            Email is wrong! please provide a valid email
          </p>
        )}
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
