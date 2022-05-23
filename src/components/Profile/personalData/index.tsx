import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import useInput from "../../../hooks/use-input";
import Button from "../../ui/Button";
import Input from "./Input";
import { PencilIcon } from "@heroicons/react/solid";
import CustomHeader from "../../header/customHeader/CustomHeader";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SAVE_USER } from "../../../GraphQl/mutation";

const PersonalData = () => {
  const { theUser, bgColor } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    value: enteredName,
    validity: enteredNameValidity,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetValue: resetNameInput,
  } = useInput((value: string) => value !== "");
  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput(
    (value: string) =>
      value.includes("@") && value !== "" && value.includes(".")
  );
  const {
    value: enteredPhone,
    validity: enteredPhoneValidity,
    hasError: phoneInputError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetValue: resetPhoneInput,
  } = useInput(
    (value: string) =>
      value.includes("@") && value !== "" && value.includes(".")
  );

  let letter;
  theUser?.fullname &&
    (letter = theUser.fullname.substring(0, 1).toUpperCase());

  const [saveNewUser, { data, loading, error }] = useMutation(SAVE_USER);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (enteredNameValidity || enteredEmailValidity) {
      saveNewUser({
        variables: {
          id: theUser.id,
          fullName: enteredName === "" ? theUser.fullname : enteredName,
          email: enteredEmail === "" ? theUser.email : enteredEmail,
        },
        onCompleted: () => {
          navigate("/");
        },
      });
    }
  };

  return (
    <div className="text-[#676767] absolute w-full z-20 top-0 bg-white ">
      <CustomHeader>Personal Data</CustomHeader>
      <div className="">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex flex-col items-center justify-between pb-20 h-screen"
        >
          <div className="flex w-full items-center flex-col  justify-between">
            <div className="w-full flex flex-row pt-5 justify-end pr-10 relative">
              {theUser?.profilePicture?.id ? (
                <img
                  className="h-24 w-24 object-cover rounded-full"
                  src={`http://localhost:8061/api/media/${theUser?.profilePicture?.id}`}
                  alt=""
                />
              ) : (
                <span
                  className={`w-24 h-24 rounded-full ${bgColor} flex justify-center 
                  items-center text-white text-4xl`}
                >
                  {letter}
                </span>
              )}
              <span
                className="absolute w-8 flex justify-center items-center h-8 
              border-[1px] bottom-0 border-gray-600 rounded-full bg-white z-20"
              >
                <PencilIcon className="w-5 h-5" />
              </span>
            </div>
            <Input
              value={!theUser ? "dreni" : enteredName}
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
          </div>
          <span className="w-4/6">
            <Button
              isDisabled={!enteredNameValidity || !enteredEmailValidity}
              isValidated={enteredEmailValidity || enteredNameValidity}
              buttonType={"submit"}
            >
              Änderungen speichern
            </Button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
