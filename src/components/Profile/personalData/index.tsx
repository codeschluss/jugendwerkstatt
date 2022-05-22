import React, { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import useInput from "../../../hooks/use-input";
import Button from "../../ui/Button";
import Input from "./Input";

const PersonalData = () => {
  const { theUser } = useContext(AuthContext);
  console.log(theUser);

  const [name, setName] = useState(theUser?.fullname);
  const [email, setEmail] = useState(theUser?.email);
  const [phone, setPhone] = useState("044123456");

  const {
    value: enteredName,
    validity: enteredNameValidity,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetValue: resetNameInput,
  } = useInput((value: any) => value !== "", theUser?.fullname);
  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput(
    (value: any) => value.includes("@") && value !== "" && value.includes("."),
    theUser?.email
  );
  const {
    value: enteredPhone,
    validity: enteredPhoneValidity,
    hasError: phoneInputError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetValue: resetPhoneInput,
  } = useInput(
    (value: any) => value.includes("@") && value !== "" && value.includes("."),
    "044123456"
  );

  return (
    <div className="text-[#676767]">
      <div>awdawd</div>

      <div className="">
        <form className="flex items-center flex-col  justify-between">
          <Input
            value={enteredName}
            title="Name"
            onInput={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          <Input
            value={enteredEmail}
            title="E-Mail"
            onInput={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <Input
            value={enteredPhone}
            title="Telefonnummer"
            onInput={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />

          <Button buttonType={"submit"}>Änderungen speichern</Button>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
