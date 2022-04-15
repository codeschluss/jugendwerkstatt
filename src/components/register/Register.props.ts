export default interface RegisterInputsProps {
  id?: string;
  fullname?: string;
  loginName?: string;
  password?: string;
  type?: string;
  value?: string;
  repeatPassword?: string;
  onBlur?: () => void;
  onChange?: any;
  error?: string;
}
