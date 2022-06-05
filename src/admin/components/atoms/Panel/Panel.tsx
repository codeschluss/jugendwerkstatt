import { FC, ReactElement } from "react";
import { twClsx } from "../../../utils/twClsx";
import { Button } from "../Form/Button/Button";
import { PanelComposition, PanelProps } from "./Panel.types";
import { PanelBody } from "./PanelBody";
import { PanelWrapper } from "./PanelWrapper";

export const Panel: FC<PanelProps> & PanelComposition = ({
  title,
  submitButton = true,
  onSubmit,
  className,
  children,
  ...rest
}): ReactElement => (
  <div className={twClsx("bg-white p-8 rounded-sm", className)} {...rest}>
    <h1 className="text-2xl font-light tracking-widest">{title}</h1>
    {children}
    {submitButton && <Button onClick={onSubmit}>Speichern</Button>}
  </div>
);

Panel.Body = PanelBody;
Panel.Wrapper = PanelWrapper;
