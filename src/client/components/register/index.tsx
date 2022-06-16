/* eslint-disable */
import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { useRegisterUserMutation } from "../../../GraphQl/graphql";
import useInput from "../../../hooks/use-input";
import AuthInput from "../../../shared/components/authentication/AuthInput";
import AuthWrapper from "../../../shared/components/authentication/AuthWrapper";
import Button from "../ui/Button";
import { RegisterValidations } from "./registerfooter/RegisterValidations";

const Register = () => {
  const [inputsAreValid, setInputsAreValid] = useState(false);

  const navigate = useNavigate();
  const { setTempEmail } = useContext(AuthContext);
  let disableInput = false;
  const regex = /[^A-Za-z0-9_.]/g;

  const {
    value: enteredUsername,
    validity: enteredUsernameValidity,
    hasError: usernameInputError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    resetValue: resetUsernameInput,
  } = useInput((value: string) => value.trim() !== "");

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

  useEffect(() => {
    if (
      enteredUsernameValidity &&
      enteredEmailValidity &&
      enteredPasswordValidity &&
      enteredCPasswordValidity
    ) {
      setInputsAreValid(true);
    } else {
      setInputsAreValid(false);
    }
  }, [
    enteredUsernameValidity,
    enteredEmailValidity,
    enteredPasswordValidity,
    enteredCPasswordValidity,
  ]);

  const [password, setPassword] = useState<string>("");
  const { passwordBits, setPasswordBits } = useContext(AuthContext);

  function passwordStrength(event: any) {
    passwordChangeHandler;
    setPassword(event.target.value);
    const passwordLength = password.length;
    let possibleSymbols = 0;

    if (password.match(/\d/)) {
      possibleSymbols = 10;
    }
    if (password.match(/[a-z]/)) {
      possibleSymbols += 26;
    }
    if (password.match(/[A-Z]/)) {
      possibleSymbols += 26;
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};~':"\\|,.<>\/?]/)) {
      possibleSymbols += 32;
    }
    const argument = Math.pow(possibleSymbols, passwordLength);

    setPasswordBits(Math.log2(argument));
  }

  const twoCalls = (e: any) => {
    passwordStrength(e);
    passwordChangeHandler(e);
  };

  const [registeredUser] = useRegisterUserMutation();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (
      enteredUsernameValidity &&
      enteredEmailValidity &&
      enteredPasswordValidity &&
      enteredCPasswordValidity
    ) {
      registeredUser({
        variables: {
          entity: {
            fullname: enteredUsername,
            email: enteredEmail,
            password: enteredPassword,
          },
        },
        onCompleted: () => {
          disableInput = true;
        },
      });
    }
    setTempEmail(enteredEmail);
    navigate("/toVerifyEmail");
  };

  return (
    <AuthWrapper page="register" title={"Registrierung"}>
      <form className="w-full" onSubmit={onSubmitHandler}>
        <div className="pb-0 p-12">
          <AuthInput
            id="Name"
            type="text"
            inputClassName={`${
              usernameInputError && "border-500-red"
            }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={enteredUsername}
            error={usernameInputError ? "Darf nicht leer sein" : ""}
          />
          <AuthInput
            id="Email-Adresse"
            type="text"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            error={emailInputError ? "E-Mail Adresse nicht gültig" : ""}
            inputClassName={`${
              emailInputError && "border-500-red"
            }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
          />
          <AuthInput
            id="Passwort"
            type="password"
            onChange={twoCalls}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            error={passwordInputError ? "Passwort nicht stark genug" : ""}
            inputClassName={`${
              passwordInputError && "border-500-red"
            }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
          />
          <AuthInput
            id="Passwort wiederholen"
            type="password"
            onChange={cPasswordChangeHandler}
            onBlur={cPasswordBlurHandler}
            value={enteredCPassword}
            error={cPasswordInputError ? "Password must match" : ""}
            inputClassName={`${
              cPasswordInputError && "border-500-red"
            }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
          />
          <RegisterValidations />
        </div>
        <span className="w-[80%] block m-auto">
          <Button
            isValidated={inputsAreValid}
            isDisabled={inputsAreValid}
            buttonType={"submit"}
          >
            Registrieren
          </Button>
        </span>
      </form>
    </AuthWrapper>
  );
};

export default Register;
