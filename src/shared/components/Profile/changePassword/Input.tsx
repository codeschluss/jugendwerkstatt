import React from "react";
import { InputType } from "zlib";

interface InputProps {
  title?: any;
  value: string;
  onInput?: any;
  onBlur?: any;
}

const Input: React.FC<InputProps> = ({ title, value, onInput, onBlur }) => {
  return (
    <div className="flex flex-col w-5/6 my-2">
      <p>{title}</p>
      <input
        onChange={onInput}
        onBlur={onBlur}
        value={value}
        type="password"
        className="border-[1px] rounded-md border-[#676767] h-10 px-2"
      />
    </div>
  );
};

export default Input;
