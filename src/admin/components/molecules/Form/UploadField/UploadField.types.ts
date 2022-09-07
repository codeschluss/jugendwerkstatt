import { InputProps } from "../../../atoms/Form/Input/Input.props";

export interface UploadFieldProps extends InputProps {
    inputClassName?: string;
    placeholderTitle?: string;
    preview?: boolean;
    index?: number;
    src?: string;
    handleAppend?: (index: number, file: File | null) => void;
    handleShow?: () => void;
    video?: boolean;
}
