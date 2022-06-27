import { ComponentPropsWithoutRef } from "react";
import { ElementType, ReactElement } from "react";
import { twClsx } from "../../../../utils/twClsx";
import { LabelProps } from "./Label.props";

export const Label = <T extends ElementType = "label">({
  as,
  className,
  children,
  ...rest
}: LabelProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof LabelProps<T>>): ReactElement => {
  const Component = as || "label";
  return (
    <Component className={twClsx("text-gray-600", className)} {...rest}>
      {children}
    </Component>
  );
};
