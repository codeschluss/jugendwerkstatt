import { FC, ForwardedRef, forwardRef, SyntheticEvent } from "react";
import clsx from "clsx";
import { useToggle } from "../../hooks/useToggle";
import { RegisterProps } from "./Register.props";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import I from "../ui/IconWrapper";

export const RegisterInput = forwardRef(
  (
    { id, onChange, error, type, ...rest }: RegisterProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isToggled, handleToggle } = useToggle(false);

    function passwordStrength(event: any) {
      if (id == "Password") {
        console.log(event);
        const password = event.target.value;
        const passwordLength = password.length;
        var possibleSymbols = 0;

        if (password.match(/\d/)) {
          possibleSymbols = 10;
          console.log("numrat");
        }
        if (password.match(/[a-z]/)) {
          possibleSymbols += 26;
          console.log("a-z");
        }
        if (password.match(/[A-Z]/)) {
          possibleSymbols += 26;
          console.log("A-Z");
        }
        if (password.match(/[!@#$%^&*()_+\-=\[\]{};~':"\\|,.<>\/?]/)) {
          possibleSymbols += 32;
          console.log("char");
        }
        console.log(possibleSymbols);
        console.log(passwordLength);
        const argument = Math.pow(possibleSymbols, passwordLength);
        console.log(argument);
        const passwordBits = Math.log2(argument);

        console.log(passwordBits);
      }
    }

    return (
      <>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={passwordStrength}
            type={type === "password" && !isToggled ? "password" : "text"}
            className={clsx(
              error && "border-red-500",
              "w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
            )}
            ref={ref}
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute right-0 top-2"
              onClick={handleToggle}
            >
              <I>{isToggled ? <EyeOffIcon /> : <EyeIcon />}</I>
            </button>
          )}
          <label
            htmlFor={id}
            className="transform transition-all top-4 text-lg peer-valid:text-gray-500 absolute left-0 h-full pl-4 peer-focus:text-sm peer-valid:text-sm peer-valid:pl-3 peer-valid:top-0"
          >
            {id}
          </label>
        </div>
        {error && (
          <p className="text-red-500 -mt-5 mb-1 text-xs ml-2">
            {error.message}
          </p>
        )}
      </>
    );
  }
);

RegisterInput.displayName = "RegisterInput";
