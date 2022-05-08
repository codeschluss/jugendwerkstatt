import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import EventContext from "../../../contexts/EventContext";
import {
  useCreateTokenMutation,
  useGetUserQuery,
} from "../../../GraphQl/graphql";
import useInput from "../../../hooks/use-input";
import useTokenCheck from "../../../hooks/use-tokenCheck";
import Button from "../../ui/Button";
import AuthInput from "../AuthInput";
import AuthWrapper from "../AuthWrapper";
import jwtDecode from "jwt-decode";

const Login = () => {
  const { setTheUser } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState();
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
  } = useInput((value: any) => value.trim().length !== 0);

  const [createToken, { data, loading, error }] = useCreateTokenMutation({
    variables: {
      username: enteredEmail,
      password: enteredPassword,
    },
  });

  const result = useGetUserQuery({
    skip: !accessToken ? true : false,
    variables: {
      entity: {
        id: accessToken,
      },
    },
  });

  useEffect(() => {
    if (data) {
      setAccessToken(jwtDecode(data?.createToken?.access || ""));
      result.refetch();
    }
  }, [data, result.data]);

  if (result.data) {
    setTheUser(result.data.getUser);
  }

  const submitHandler = async (e: any) => {
    e.preventDefault();
    await createToken();
    resetEmailInput();
    resetPasswordInput();
  };

  useTokenCheck(data?.createToken?.access, data?.createToken?.refresh);

  return (
    <AuthWrapper title="Anmelden">
      <form onSubmit={submitHandler} className="mt-5 text-right p-3">
        <AuthInput
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          error={emailInputError ? "must be a valid email address" : ""}
          placeholder="E-Mail Adresse"
          inputClassName="w-25 px-4  text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <AuthInput
          value={enteredPassword}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          error={passwordInputError ? "password not strong enough" : ""}
          type="password"
          placeholder="Neuer Password"
          inputClassName="w-25 px-4  text-xl p-3 peer f
          ocus:outline-none border-2 rounded-md"
        />

        <Link className="underline my-10" to="/password-reset/password">
          {" "}
          Password Vergessen?
        </Link>
        <Button
          isValidated={enteredPasswordValidity && enteredEmailValidity}
          isDisabled={!passwordInputError && !emailInputError}
          buttonType={"submit"}
        >
          Anmelden
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Login;
