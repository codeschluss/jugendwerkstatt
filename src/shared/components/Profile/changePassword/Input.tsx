import React from "react";
import { InputType } from "zlib";

interface InputProps {
  title?: any;
  value: string;
  onInput?: any;
  onBlur?: any;
  error?: any;
}

const Input: React.FC<InputProps> = ({
  title,
  value,
  onInput,
  onBlur,
  error,
}) => {
  return (
    <div className="flex flex-col w-5/6 my-2">
      <p>{title}</p>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <input
        onChange={onInput}
        onBlur={onBlur}
        value={value}
        type="password"
        className={`border-[1px]  rounded-md border-[#676767] h-10 px-2 ${
          error ? "border-red-500" : ""
        }`}
      />
    </div>
  );
};

export default Input;
