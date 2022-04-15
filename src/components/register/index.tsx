/* eslint-disable */
import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { SAVE_USER } from "../../GraphQl/mutation";
import useInput from "../../hooks/use-input";
import { RegisterFooter } from "./registerfooter/RegisterFooter";
import { RegisterValidations } from "./registerfooter/RegisterValidations";
import { RegisterInput } from "./RegisterInput";

const Register = () => {
  const [inputsAreValid, setInputsAreValid] = useState(false);

  const navigate = useNavigate();
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

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (
      enteredUsernameValidity &&
      enteredEmailValidity &&
      enteredPasswordValidity &&
      enteredCPasswordValidity
    ) {
      await saveNewUser({
        variables: {
          fullName: enteredUsername,
          loginName: enteredEmail,
          password: enteredPassword,
        },
      });

      resetUsernameInput();
      resetEmailInput();
      resetPasswordInput();
      resetCPasswordInput();
    }
    navigate("/login");
    //TODO: SET GLOBAL HEAD COMPONENT TO CHECK EMAIL
  };

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 sticky h-100">
        <img
          className="h-full w-screen object-cover"
          src="/assets/background.png"
          alt={"logo"}
        />
      </div>
      <div className="flex justify-center relative flex-grow w-screen -mt-6 rounded-3xl bg-white">
        <form className="w-screen" onSubmit={onSubmitHandler}>
          <div className="text-3xl text-center mt-5">Registrierung</div>
          <div className="p-10 pb-0">
            <RegisterInput
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
            <RegisterInput
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
            <RegisterInput
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
            <RegisterInput
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
          <RegisterFooter
            isValidated={inputsAreValid}
            isDisabled={inputsAreValid}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
