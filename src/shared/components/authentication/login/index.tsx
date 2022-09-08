import { ReactElement, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../client/components/footer";
import Button from "../../../../client/components/ui/Button";
import { useCreateTokenMutation } from "../../../../GraphQl/graphql";
import useInput from "../../../../hooks/use-input";
import { useAuthStore } from "../../../../store";
import { useTempEmailStore } from "../../../../store/tempEmail/tempEmail.store";
import { getSingleJWTField, writeAuthToken } from "../../../utils";
import AuthInput from "../AuthInput";
import AuthWrapper from "../AuthWrapper";

const Login = (): ReactElement => {
  const { addAuth } = useAuthStore();
  const { setTempEmail } = useTempEmailStore();

  const handleStoreUser = useCallback(
    (access: string, refresh: string) => {
      writeAuthToken("refreshToken", refresh);
      writeAuthToken("accessToken", access);
      const fileds = getSingleJWTField(access);
      addAuth(
        {
          roles: fileds?.roles || [],
          scopes: fileds?.scopes || [],
          approved: fileds?.approved || false,
          verified: fileds?.verified || false,
          email: fileds?.sub || "",
        },
        true,
        false
      );
    },
    [addAuth]
  );

  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(
    (value: any) => value.includes("@") && value !== "" && value.includes(".")
  );

  const {
    value: enteredPassword,
    validity: enteredPasswordValidity,
    hasError: passwordInputError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value: any) => value.trim().length !== 0);

  const [createToken] = useCreateTokenMutation({
    onCompleted: ({ createToken }) => {
      handleStoreUser(createToken?.access || "", createToken?.refresh || "");
    },
  });

  const submitHandler = async (e: any) => {
    setTempEmail(enteredEmail);
    e.preventDefault();
    createToken({
      variables: {
        username: enteredEmail,
        password: enteredPassword,
      },
    });
  };

  return (
    <>
      <AuthWrapper title="Anmelden">
        <form onSubmit={submitHandler} className="p-6 mt-5 text-right">
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

          <Link className="my-10 underline" to="/reset-password/email">
            {" "}
            <p className="my-2">Passwort vergessen?</p>
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
      <Footer />
    </>
  );
};

export default Login;
