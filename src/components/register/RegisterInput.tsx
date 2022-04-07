import { FC, ForwardedRef, forwardRef } from "react";
import clsx from "clsx";
import { useToggle } from "../../hooks/useToggle";
import { RegisterProps } from "./Register.props";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import I from "../ui/IconWrapper";

export const RegisterInput = forwardRef(
  (
    { id, error, type, ...rest }: RegisterProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isToggled, handleToggle } = useToggle(false);

    return (
      <>
        <div className="relative group rounded-md px-1 mb-4">
          <input
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
            className="transform transition-all peer-valid:text-gray-500 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 group-focus-within:pl-3 peer-valid:pl-3"
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
