import { FC, ForwardedRef, forwardRef } from "react";
import { RegisterProps } from "./Register.props";

export const RegisterInput = forwardRef(
  (
    { id, error, ...rest }: RegisterProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className="relative group rounded-md px-1 mb-4">
      <input
        type="text"
        className="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
        ref={ref}
        {...rest}
      />
      <label
        htmlFor={id}
        className="transform transition-all text-zinc-400 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 group-focus-within:pl-3 peer-valid:pl-3"
      >
        {id}
      </label>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  )
);

RegisterInput.displayName = "RegisterInput";
