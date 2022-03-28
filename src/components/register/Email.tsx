import React from "react";
import useInput from "../../hooks/use-input";

const Email = () => {
  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailCHangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput((value: string) => value.trim().length !== 0);

  return (
    <>
      <div className="relative group rounded-md px-1 mb-4">
        <input
          type="email"
          id="email"
          name="email"
          onChange={emailCHangeHandler}
          onBlur={emailBlurHandler}
          className="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <label
          htmlFor="email"
          className="transform transition-all text-zinc-400 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1 group-focus-within:pl-3 peer-valid:pl-3"
        >
          E-Mail-Adresse
        </label>
        {emailInputError ? (
          <span className="text-xs mt-0 text-rose-500">
            Dies ist ein Pflichtfeld
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Email;
