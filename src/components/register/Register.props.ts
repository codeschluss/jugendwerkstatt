import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface RegisterInputsProps {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface RegisterProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}
