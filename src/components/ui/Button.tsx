import React from "react";

interface ButtonProps {
  isValidated?: boolean;
  isDisabled?: boolean;
  buttonType?: any;
  click?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  isValidated,
  isDisabled,
  children,
  buttonType,
  click,
}) => {
  return (
    <button
      onClick={click}
      type={buttonType}
      disabled={!isDisabled}
      style={{ background: isValidated ? "#C20639" : "#c2063898" }}
      className="w-full h-8 drop-shadow-md rounded-2xl active:opacity-80  text-white"
    >
      {children}
    </button>
  );
};

export default Button;
