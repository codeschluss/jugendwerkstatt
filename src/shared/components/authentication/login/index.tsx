import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../../contexts/AuthContext';
import {
  useCreateTokenMutation,
  useGetMeBasicQuery,
  useGetUserQuery,
} from '../../../../GraphQl/graphql';
import useInput from '../../../../hooks/use-input';
import useTokenCheck from '../../../../hooks/use-tokenCheck';
import Button from '../../../../client/components/ui/Button';
import AuthInput from '../AuthInput';
import AuthWrapper from '../AuthWrapper';
import jwtDecode from 'jwt-decode';

const Login = () => {
  const { setTempEmail } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState();
  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput(
    (value: any) => value.includes('@') && value !== '' && value.includes('.')
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
      setAccessToken(jwtDecode(data?.createToken?.access || ''));
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
      <form onSubmit={submitHandler} className="p-6 mt-5 text-right">
        <AuthInput
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          error={emailInputError ? 'must be a valid email address' : ''}
          placeholder="E-Mail Adresse"
          inputClassName="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <AuthInput
          value={enteredPassword}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          error={passwordInputError ? 'password not strong enough' : ''}
          type="password"
          placeholder="Neuer Password"
          inputClassName="w-full px-4 text-xl p-3 peer f
          ocus:outline-none border-2 rounded-md"
        />

        <Link className="my-10 underline" to="/forgot-password/email">
          {' '}
          <p>Password Vergessen?</p>
        </Link>
        <Button
          isValidated={enteredPasswordValidity && enteredEmailValidity}
          isDisabled={!passwordInputError && !emailInputError}
          buttonType={'submit'}
        >
          Anmelden
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Login;
