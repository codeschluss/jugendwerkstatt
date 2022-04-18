import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useToggle } from "../../hooks/useToggle";
import I from "../ui/IconWrapper";

interface AuthInputProps {
  id?: string;
  fullname?: string;
  loginName?: string;
  password?: string;
  type?: string;
  value?: string;
  inputClassName: string;
  repeatPassword?: string;
  onBlur?: () => void;
  onChange?: any;
  error?: string;
  placeholder?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  error,
  id,
  fullname,
  inputClassName,
  loginName,
  onBlur,
  onChange,
  password,
  repeatPassword,
  type,
  placeholder,
  value,
}) => {
  const { isToggled, handleToggle } = useToggle(false);

  return (
    <>
      <div className="relative z-0 mb-6 w-full group flex justify-center">
        <input
          style={{ border: error ? " red" : "" }}
          onChange={onChange}
          onBlur={onBlur}
          type={type === "password" && !isToggled ? "password" : "text"}
          className={inputClassName}
          value={value}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-0 top-2"
            onClick={handleToggle}
          >
            <I>{isToggled ? <EyeOffIcon /> : <EyeIcon />}</I>
          </button>
        )}
        <label
          htmlFor={id}
          className="transform transition-all top-4 text-lg peer-valid:text-gray-500 absolute left-0 h-full pl-4 peer-focus:text-sm peer-valid:text-sm peer-valid:pl-3 peer-valid:top-0"
        >
          {id}
        </label>
      </div>
      {error && <p className="text-red-500 -mt-5 mb-1 text-xs ml-2">{error}</p>}
    </>
  );
};

export default AuthInput;
