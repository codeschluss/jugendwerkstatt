import { InputProps } from "../../../atoms/Form/Input/Input.props";

export interface UploadFieldProps extends InputProps {
  inputClassName?: string;
  preview?: boolean;
  src?: string;
  handleAppend?: () => void;
  handleShow?: () => void;
}
