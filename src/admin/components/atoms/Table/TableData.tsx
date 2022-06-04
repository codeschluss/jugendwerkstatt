import { ElementType, ReactElement } from "react";
import { twClsx } from "../../../utils";
import { TableDataProps } from "./Table.types";

export const TableData = <T extends ElementType = "td">({
  children,
  className,
  as,
  ...rest
}: TableDataProps<T>): ReactElement => {
  const Component = as || "td";

  return (
    <Component
      {...rest}
      className={twClsx(
        "flex justify-center items-center flex-row mx-[2px] w-full min-w-max p-1 text-lg text-[#424242] bg-[#F7F7F7] font-redHat font-medium",
        Component === "th" && "bg-[#424242] text-white",
        className
      )}
    >
      {children}
    </Component>
  );
};

TableData.displayName = "Table.Data";
