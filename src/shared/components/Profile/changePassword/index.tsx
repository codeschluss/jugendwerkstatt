import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../client/components/ui/Button";
import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";
import { SAVE_USER } from "../../../../GraphQl/mutation";
import useInput from "../../../../hooks/use-input";
import CustomHeader from "../../header/customHeader/CustomHeader";
import Input from "./Input";

const ChangePassword = () => {
  const user = useGetMeBasicQuery();
  const navigate = useNavigate();
  const regex = /[^A-Za-z0-9_.]/g;
  const {
    value: passwordOne,
    validity: passwordOneValidity,
    hasError: passwordOneError,
    valueChangeHandler: passwordOneChangeHandler,
    inputBlurHandler: passwordOneBlurHandler,
    resetValue: resetPasswordOneInput,
  } = useInput((value: any) => value.match(regex) && value.trim().length > 6);
  const {
    value: passwordTwo,
    validity: passwordTwoValidity,
    hasError: passwordTwoError,
    valueChangeHandler: passwordTwoChangeHandler,
    inputBlurHandler: passwordTwoBlurHandler,
    resetValue: resetPasswordTwoInput,
  } = useInput((value: string) => value !== "" && value === passwordOne);

  const [saveNewUser, { data, loading, error }] = useMutation(SAVE_USER);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (passwordOneValidity || passwordTwoValidity) {
      saveNewUser({
        variables: {
          id: user.data?.me?.id,
          password: passwordOne,
        },
        onCompleted: () => {
          navigate("/");
        },
      });
    }
  };

  return (
    <div className="text-[#676767] absolute md:static w-full md:w-2/5 m z-20 top-0 bg-white ">
      <CustomHeader>Passwort ändern</CustomHeader>
      <div className="">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex flex-col items-center justify-between md:justify-start pb-20 h-full"
        >
          <div className="flex w-full items-center flex-col  justify-between">
            <Input
              value={passwordOne}
              title="Neues Passwort"
              onInput={passwordOneChangeHandler}
              onBlur={passwordOneBlurHandler}
              error={passwordOneError ? "Password nicht stark Genug" : false}
            />
            <Input
              value={passwordTwo}
              title="Passwort wiederholen"
              onInput={passwordTwoChangeHandler}
              onBlur={passwordTwoBlurHandler}
              error={passwordTwoError ? "Password must match" : false}
            />
          </div>
          <span className="w-4/6 md:w-2/5 md:my-5">
            <Button
              isDisabled={passwordTwoValidity}
              isValidated={passwordTwoValidity}
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
