import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../client/components/ui/Button";
// import AuthContext from "../../../../contexts/AuthContext";
import { useSendPasswordResetMutation } from "../../../../GraphQl/graphql";
import useInput from "../../../../hooks/use-input";
import { useTempEmailStore } from "../../../../store/tempEmail/tempEmail.store";
import AuthInput from "../AuthInput";

const Email: React.FC = () => {
  const [errorText, setErrorText] = useState(false);
  const { setTempEmail } = useTempEmailStore();
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
        className="flex flex-col justify-between p-2 mt-16"
      >
        <AuthInput
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          error={emailInputError ? "Keine gültige E-Mail Adresse" : ""}
          placeholder="E-Mail Adresse"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        {errorText && (
          <p className="text-primary">
            {" "}
            E-Mail Adresse nicht gültig. Bitte valide E-Mail Adresse angeben.
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
