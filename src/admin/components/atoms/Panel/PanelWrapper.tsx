import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { twClsx } from "../../../utils";
import { Button } from "../Form/Button/Button";
import { PanelWrapperProps } from "./Panel.types";

export const PanelWrapper: FC<PanelWrapperProps> = ({
  className,
  children,
  action,
  ...rest
}): ReactElement => (
  <div
    className={twClsx(
      "min-h-[75vh] p-4 bg-white flex justify-between flex-col items-start min-w-max overflow-y-auto",
      className
    )}
    {...rest}
  >
    {children}
    {action && (
      <Button className="mt-20">
        <Link to={action.to}>{action.label}</Link>
      </Button>
    )}
  </div>
);
