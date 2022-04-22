/* eslint-disable */
import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useSendVerificationMutation } from "../../GraphQl/graphql";
import { SAVE_USER } from "../../GraphQl/mutation";
import useInput from "../../hooks/use-input";
import AuthInput from "../authentication/AuthInput";
import AuthWrapper from "../authentication/AuthWrapper";
import Button from "../ui/Button";
import { RegisterFooter } from "./registerfooter/RegisterFooter";
import { RegisterValidations } from "./registerfooter/RegisterValidations";

const Register = () => {
  const [inputsAreValid, setInputsAreValid] = useState(false);
  const [authHeaderContent, setAuthHeaderContent] = useState({
    headertype: "",
    headerText: "",
  });
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

  console.log(inputsAreValid, "the inputs");

  const [password, setPassword] = useState<string>("");
  const { passwordBits, setPasswordBits } = useContext(AuthContext);

  function passwordStrength(event: any) {
    passwordChangeHandler;
    console.log(event);
    setPassword(event.target.value);
    const passwordLength = password.length;
    let possibleSymbols = 0;

    if (password.match(/\d/)) {
      possibleSymbols = 10;
      console.log("numrat");
    }
    if (password.match(/[a-z]/)) {
      possibleSymbols += 26;
      console.log("a-z");
    }
    if (password.match(/[A-Z]/)) {
      possibleSymbols += 26;
      console.log("A-Z");
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};~':"\\|,.<>\/?]/)) {
      possibleSymbols += 32;
      console.log("char");
    }
    console.log(possibleSymbols);
    console.log(passwordLength);
    const argument = Math.pow(possibleSymbols, passwordLength);
    console.log(argument);

    setPasswordBits(Math.log2(argument));

    console.log(passwordBits);
  }

  const twoCalls = (e: any) => {
    passwordStrength(e);
    passwordChangeHandler(e);
  };

  const [saveNewUser, { data, loading, error }] = useMutation(SAVE_USER);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (
      enteredUsernameValidity &&
      enteredEmailValidity &&
      enteredPasswordValidity &&
      enteredCPasswordValidity
    ) {
      saveNewUser({
        variables: {
          fullName: enteredUsername,
          email: enteredEmail,
          password: enteredPassword,
        },
        onCompleted: () => {
          disableInput = true;
        },
      });
    }

    if (data) {
    }

    setAuthHeaderContent({
      headertype: "email",
      headerText: "Du hast noch keinen Verifizieringsliink erhalten?",
    });
  };

  const [sendVerificationMutation] = useSendVerificationMutation({
    variables: {
      email: enteredEmail,
    },
  });

  const aaabbb = () => {
    sendVerificationMutation();
  };
  return (
    <AuthWrapper
      title={"Registrierung"}
      headerType={`${
        !authHeaderContent ? false : authHeaderContent.headertype
      }`}
      headerContent={`${
        !authHeaderContent ? false : authHeaderContent.headerText
      }`}
      resendLink={aaabbb}
    >
      <form className="w-screen" onSubmit={onSubmitHandler}>
        <div className="p-10 pb-0">
          <AuthInput
            id="Name"
            type="text"
            inputClassName={`${
              usernameInputError && "border-500-red"
            }"w-full px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"`}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={enteredUsername}
            error={usernameInputError ? "Cannot be left empty" : ""}
          />
          <AuthInput
            id="Email"
            type="text"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            error={emailInputError ? "must be a valid email address" : ""}
            inputClassName={`${
              emailInputError && "border-500-red"
            }"w-full px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"`}
          />
          <AuthInput
            id="Password"
            type="password"
            onChange={twoCalls}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            error={passwordInputError ? "password not strong enough" : ""}
            inputClassName={`${
              passwordInputError && "border-500-red"
            }"w-full px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"`}
          />
          <AuthInput
            id="Repeat-Password"
            type="password"
            onChange={cPasswordChangeHandler}
            onBlur={cPasswordBlurHandler}
            value={enteredCPassword}
            error={cPasswordInputError ? "password not strong enough" : ""}
            inputClassName={`${
              cPasswordInputError && "border-500-red"
            }"w-full px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"`}
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
        <RegisterFooter />
      </form>
    </AuthWrapper>
  );
};

export default Register;
