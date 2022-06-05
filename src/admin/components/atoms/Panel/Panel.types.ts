import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface PanelWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  action?: { to: string; label: string };
}

export interface PanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  submitButton?: boolean;
  onSubmit?: () => void;
}

export interface PanelBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface PanelComposition {
  Body: FC<PanelBodyProps>;
  Wrapper: FC<PanelWrapperProps>;
}
