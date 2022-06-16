import { InputProps } from "../../../atoms/Form/Input/Input.props";
import { LabelProps } from "../../../atoms/Form/Label/Label.props";

export interface UploadFieldProps extends InputProps {
  inputClassName?: string;
  labelProps?: LabelProps;
  preview?: boolean;
  src?: string;
  handleAppend?: (file: FileList) => void;
}
