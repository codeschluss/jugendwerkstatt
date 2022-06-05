import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  action?: { to: string; label: string };
}
