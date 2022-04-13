/* eslint-disable */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import useInput from "../../hooks/use-input";
import { RegisterFooter } from "./registerfooter/RegisterFooter";
import { RegisterValidations } from "./registerfooter/RegisterValidations";
import { RegisterInput } from "./RegisterInput";

const Register = () => {
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

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  const [password, setPassword] = useState<string>("");
  const { passwordBits, setPasswordBits } = useContext(AuthContext);

  function passwordStrength(event: any) {
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
        <form className="w-screen">
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
              error={emailInputError ? "msut contain @" : ""}
              inputClassName={`${
                emailInputError && "border-500-red"
              }"w-full px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"`}
            />
            <RegisterInput
              id="Password"
              type="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              error={passwordInputError ? "msut contain @" : ""}
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
              error={cPasswordInputError ? "msut contain @" : ""}
              inputClassName={`${
                cPasswordInputError && "border-500-red"
              }"w-full px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"`}
            />
            <RegisterValidations />
          </div>
          <RegisterFooter />
        </form>
      </div>
    </div>
  );
};

export default Register;
