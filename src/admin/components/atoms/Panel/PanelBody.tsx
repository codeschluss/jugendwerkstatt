import { FC, ReactElement } from "react";
import { twClsx } from "../../../utils/twClsx";
import { PanelBodyProps } from "./Panel.types";

export const PanelBody: FC<PanelBodyProps> = ({
  className,
  children,
}): ReactElement => (
  <div className={twClsx("mt-8 mb-12", className)}>{children}</div>
);

PanelBody.displayName = "Panel.Body";
