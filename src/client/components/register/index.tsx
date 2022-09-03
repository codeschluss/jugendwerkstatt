/* eslint-disable */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../GraphQl/graphql";
import useInput from "../../../hooks/use-input";
import AuthInput from "../../../shared/components/authentication/AuthInput";
import AuthWrapper from "../../../shared/components/authentication/AuthWrapper";
import { useTempEmailStore } from "../../../store/tempEmail/tempEmail.store";
import Footer from "../footer";
import Button from "../ui/Button";
import { RegisterValidations } from "./registerfooter/RegisterValidations";

const Register = () => {
  const [inputsAreValid, setInputsAreValid] = useState(false);

  const navigate = useNavigate();
  const { setTempEmail } = useTempEmailStore();

  let disableInput = false;
  const regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

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
    passwordExtraInputError: passWordExtraError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetValue: resetPasswordInput,
  } = useInput((value: any) => value.trim().length >= 8 && value.match(regex));

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
  // const { passwordBits, setPasswordBits } = useContext(AuthContext);
  const [passwordBits, setPasswordBits] = useState<any>();

  const twoCalls = (e: any) => {
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
      }).then(() => navigate("/toVerifyEmail"));
    }
    setTempEmail(enteredEmail);
  };

  return (
    <>
      <AuthWrapper page="register" title={"Registrierung"}>
        <form className="w-full" onSubmit={onSubmitHandler}>
          <div className="p-12 pb-0">
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
              error={
                passwordInputError
                  ? "Passwort ist nicht stark genug oder erfüllt nicht die Passwortanforderungen"
                  : ""
              }
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
              error={
                cPasswordInputError ? "Passwörter stimmen nicht überein" : ""
              }
              inputClassName={`${
                cPasswordInputError && "border-500-red"
              }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
            />
          </div>
          <div className=" mx-12 mb-5">
            <p>Passwortstärke:</p>
            <ul className="list-disc ml-5">
              <li className={`${passWordExtraError && "text-red-400"}`}>
                8 Zeichen
              </li>
              <li className={`${passWordExtraError && "text-red-400"}`}>
                Mindestens 1 Zahl
              </li>
              <li className={`${passWordExtraError && "text-red-400"}`}>
                Mindestens 1 Buchstabe
              </li>
              <li className={`${passWordExtraError && "text-red-400"}`}>
                Keine Zonderzeichen
              </li>
            </ul>
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
      <Footer />
    </>
  );
};

export default Register;
