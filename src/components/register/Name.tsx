import React from "react";
import useInput from "../../hooks/use-input";

type Inputs = {
  register: any;
};

const Name: React.FC<Inputs> = ({ register }) => {
  const {
    value: enteredUsername,
    validity: enteredUsernameValidity,
    hasError: usernameInputError,
    valueChangeHandler: usernameCHangeHandler,
    inputBlurHandler: usernameBlurHandler,
    resetValue: resetUsernameInput,
  } = useInput((value: string) => value.trim().length !== 0);

  return (
    <>
      <div className="relative group rounded-md px-1 mb-4">
        <input
          {...register("name")}
          name="name"
          type="text"
          id="username"
          // onChange={usernameCHangeHandler}
          onBlur={usernameBlurHandler}
          className="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <label
          htmlFor="username"
          className="transform transition-all text-zinc-400 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 group-focus-within:pl-3 peer-valid:pl-3"
        >
          Name
        </label>
        {usernameInputError ? (
          <span className="text-xs text-rose-500 mt-0">
            Dies ist ein Pflichtfeld
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Name;
