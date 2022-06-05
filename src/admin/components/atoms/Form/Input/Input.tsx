import { forwardRef } from "react";
import { twClsx } from "../../../../utils/twClsx";
import { Icon } from "../../Icons/Icon";
import { InputProps } from "./Input.props";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, iconRight, ...rest }, ref) => (
    <>
      <div
        className={twClsx(
          "input-wrapper",
          error ? "border-primary" : "border-gray-400",
          className
        )}
      >
        <input ref={ref} {...rest} />
        {iconRight && <Icon icon={iconRight} />}
      </div>

      {error && (
        <span className="block pt-1 text-sm text-primary">{error}</span>
      )}
    </>
  )
);
