import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import I from "../ui/IconWrapper";
import RegisterProps from "./Register.props";

export const RegisterInput = forwardRef(
  (
    {
      id,
      fullname,
      loginName,
      password,
      repeatPassword,
      inputClassName,
      type,
      onChange,
      onBlur,
      error,
      value,
    }: RegisterProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isToggled, handleToggle } = useToggle(false);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
      if (error) {
        setHasError(true);
      }
    }, [error]);
    console.log(hasError, "hasError");
    return (
      <>
        <div className="relative z-0 mb-6 w-full group">
          <input
            style={{ border: error ? "2px solid red" : "" }}
            onChange={onChange}
            onBlur={onBlur}
            type={type === "password" && !isToggled ? "password" : "text"}
            className={inputClassName}
            value={value}
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
          <p className="text-red-500 -mt-5 mb-1 text-xs ml-2">{error}</p>
        )}
      </>
    );
  }
);

RegisterInput.displayName = "RegisterInput";
