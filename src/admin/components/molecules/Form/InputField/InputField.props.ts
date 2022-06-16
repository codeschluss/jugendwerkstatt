import { InputProps } from "../../../atoms/Form/Input/Input.props";

export interface InputFieldProps extends InputProps {
  label?: string;
  inputClassName?: string;
  required?: boolean;
}
