import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

import { twClsx } from "../../../utils";
import { Button } from "../Button/Button";
import { PanelProps } from "./Panel.types";

export const Panel: FC<PanelProps> = ({
  className,
  children,
  action,
  ...rest
}): ReactElement => (
  <div
    className={twClsx(
      "min-h-full p-4 bg-white flex justify-between flex-col items-start",
      className
    )}
    {...rest}
  >
    {children}
    {action && (
      <Button>
        <Link to={action.to}>{action.label}</Link>
      </Button>
    )}
  </div>
);
