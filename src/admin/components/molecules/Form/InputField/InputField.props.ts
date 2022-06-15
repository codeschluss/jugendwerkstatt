import { InputProps } from "../../../atoms/Form/Input/Input.props";
import { LabelProps } from "../../../atoms/Form/Label/Label.props";

export interface InputFieldProps extends InputProps {
  label?: string;
  inputClassName?: string;
  labelProps?: LabelProps;
  required?: boolean;
}
