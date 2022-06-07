import { forwardRef } from "react";
import { twClsx } from "../../../../utils";
import { Label } from "../Label/Label";
import { SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, required = true, error, className, children, ...rest }, ref) => (
    <div className="flex flex-col w-full">
      <Label className="text-lg">
        {label}
        {required && <span className="p-1 text-primary">*</span>}
      </Label>
      <select
        ref={ref}
        className={twClsx(
          "text-base p-1 h-8 border rounded-sm focus:outline-none",
          error ? "border-primary" : "border-gray-400",
          className
        )}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <span className="block pt-1 text-sm text-primary">{error}</span>
      )}
    </div>
  )
);
