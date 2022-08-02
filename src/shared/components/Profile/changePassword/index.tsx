import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../client/components/ui/Button";
import {
  useGetMeBasicQuery,
  useRegisterUserMutation,
} from "../../../../GraphQl/graphql";
import useInput from "../../../../hooks/use-input";
import AuthInput from "../../authentication/AuthInput";
import CustomHeader from "../../header/customHeader/CustomHeader";
import SimpleBackdrop from "./Backdrop";

const ChangePassword = () => {
  const user = useGetMeBasicQuery();
  const navigate = useNavigate();
  const regex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const {
    value: passwordOne,
    validity: passwordOneValidity,
    hasError: passwordOneError,
    valueChangeHandler: passwordOneChangeHandler,
    inputBlurHandler: passwordOneBlurHandler,
    resetValue: resetPasswordOneInput,
  } = useInput((value: any) => value.match(regex) && value.trim().length >= 8);
  const {
    value: passwordTwo,
    validity: passwordTwoValidity,
    hasError: passwordTwoError,
    valueChangeHandler: passwordTwoChangeHandler,
    inputBlurHandler: passwordTwoBlurHandler,
    resetValue: resetPasswordTwoInput,
  } = useInput((value: string) => value !== "" && value === passwordOne);

  const [updateUser] = useRegisterUserMutation();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (passwordOneValidity || passwordTwoValidity) {
      updateUser({
        variables: {
          entity: {
            id: user.data?.me?.id,
            password: passwordOne,
          },
        },
        onCompleted: () => {
          navigate("/");
        },
      });
    }
  };

  return (
    <div className="text-[#676767] md:m-5 absolute md:static w-full md:w-2/5 m z-20 top-0 bg-white ">
      <CustomHeader>Passwort ändern</CustomHeader>
      <div className="">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex flex-col items-center justify-between md:justify-start pb-20 h-full"
        >
          <div className="flex w-full items-center flex-col mt-16 justify-between">
            <AuthInput
              id="Passwort"
              type="password"
              onChange={passwordOneChangeHandler}
              onBlur={passwordOneBlurHandler}
              value={passwordOne}
              error={passwordOneError ? "Passwort nicht stark genug" : ""}
              inputClassName={`${
                passwordOneError && "border-500-red"
              }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
            />
            <AuthInput
              id="Passwort wiederholen"
              type="password"
              onChange={passwordTwoChangeHandler}
              onBlur={passwordTwoBlurHandler}
              value={passwordTwo}
              error={passwordTwoError ? "Password must match" : ""}
              inputClassName={`${
                passwordTwoError && "border-500-red"
              }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
            />
          </div>
          <div className=" mx-12 mb-5">
            <p>Passwortstärke:</p>
            <ul className="list-disc ml-5">
              <li>8 Zeichen</li>
              <li>Mindestens 1 Zahl</li>
              <li>Mindestens 1 Buchstabe</li>
            </ul>
          </div>
          <span className="w-4/6 md:w-2/5 md:my-5">
            <Button
              isDisabled={
                passwordOneValidity && passwordTwoValidity ? true : false
              }
              isValidated={
                passwordOneValidity && passwordTwoValidity ? true : false
              }
              buttonType={"submit"}
            >
              Passwort ändern
            </Button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
