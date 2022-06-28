import { InputProps } from "../../../atoms/Form/Input/Input.props";

export interface UploadFieldProps extends InputProps {
  inputClassName?: string;
  preview?: boolean;
  index?: number;
  src?: string;
  handleAppend?: (index: number, file: FileList | null) => void;
  handleShow?: () => void;
}
