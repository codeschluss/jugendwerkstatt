interface TypeInputProps {
  value?: any;
  onChange?: any;
  disabled?: any;
  hasClass?: boolean;
}

const TypeInput: React.FC<TypeInputProps> = ({
  children,
  value,
  onChange,
  disabled,
  hasClass,
}) => {
  return (
    <label
      htmlFor="contained-button-file"
      className={
        hasClass
          ? "m-0 "
          : " bg-primary w-40 mt-10 text-white  rounded-md h-10 flex items-center justify-center cursor-pointer"
      }
    >
      <input
        value={value}
        disabled={disabled}
        style={{ display: "none" }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={disabled ? () => {} : onChange}
      />
      {children}
    </label>
  );
};
export default TypeInput;
