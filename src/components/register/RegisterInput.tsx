import { FC, ForwardedRef, forwardRef, SyntheticEvent } from "react";
import clsx from "clsx";
import { useToggle } from "../../hooks/useToggle";
import { RegisterProps } from "./Register.props";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import I from "../ui/IconWrapper";

export const RegisterInput = forwardRef(
  (
    { id, onChange, error, errori, type, ...rest }: RegisterProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isToggled, handleToggle } = useToggle(false);

    let errorimsg = "insert something here";

    return (
      <>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={onChange}
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
        {errori && (
          <p className="text-red-500 -mt-5 mb-1 text-xs ml-2">{errorimsg}</p>
        )}
      </>
    );
  }
);

RegisterInput.displayName = "RegisterInput";
