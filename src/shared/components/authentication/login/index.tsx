import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../client/components/ui/Button";
import AuthContext from "../../../../contexts/AuthContext";
import {
  useCreateTokenMutation,
  useGetMeBasicQuery
} from "../../../../GraphQl/graphql";
import useInput from "../../../../hooks/use-input";
import useTokenCheck from "../../../../hooks/use-tokenCheck";
import AuthInput from "../AuthInput";
import AuthWrapper from "../AuthWrapper";

const Login = () => {
  const {
    accessToken,
    setAccessToken,
    setRefreshToken,
    setTempEmail
   } = useContext(AuthContext);
   
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

  const result = useGetMeBasicQuery({
    skip: !accessToken ? true : false,
  });

  useEffect(() => {
    if (data) {
      result.refetch();
    }
  }, [data, result.data]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    await createToken();
    resetEmailInput();
    resetPasswordInput();
    setTempEmail(enteredEmail);
  };

  useTokenCheck(data?.createToken?.access, data?.createToken?.refresh);

  return (
    <AuthWrapper title="Anmelden">
      <form onSubmit={submitHandler} className="mt-5 text-right p-6">
        <AuthInput
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          error={emailInputError ? "Keine gültige E-Mail Adresse" : ""}
          placeholder="E-Mail Adresse"
          inputClassName="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <AuthInput
          value={enteredPassword}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          error={passwordInputError ? "Passwort nicht stark genug" : ""}
          type="password"
          placeholder="Passwort"
          inputClassName="w-full px-4 text-xl p-3 peer f
          ocus:outline-none border-2 rounded-md"
        />

        <Link className="underline my-10" to="/forgot-password/email">
          {" "}
          <p>Passwort vergessen?</p>
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
