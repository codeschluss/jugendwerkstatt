/* eslint-disable */
import { RegisterInput } from "./RegisterInput";
import { RegisterFooter } from "./registerfooter/RegisterFooter";
import { RegisterValidations } from "./registerfooter/RegisterValidations";
import { useNavigate } from "react-router-dom";
import { useSaveUserMutation } from "../../graphql/gen/graphql";
import { useContext, useState } from "react";
import useInput from "../../hooks/use-input";
import AuthContext from "../../contexts/AuthContext";
const Register = () => {
  const navigate = useNavigate();

  const {
    value: enteredUsername,
    validity: enteredUsernameValidity,
    hasError: usernameInputError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    resetValue: resetUsernameInput,
  } = useInput((value: string) => {
    value.trim().length >= 4;
  });

  console.log(enteredUsername);

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
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              value={enteredUsername}
              error={usernameInputError ? "Field should be filled" : ""}
            />
            <RegisterInput id="Email" />
            <RegisterInput id="Password" type="password" />
            <RegisterInput id="Repeat-Password" type="password" />
            <RegisterValidations />
          </div>
          <RegisterFooter />
        </form>
      </div>
    </div>
  );
};

export default Register;
