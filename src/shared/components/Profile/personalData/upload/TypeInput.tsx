interface TypeInputProps {
  value?: any;
  onChange?: any;
  disabled?: any;
}

const TypeInput: React.FC<TypeInputProps> = ({
  children,
  value,
  onChange,
  disabled,
}) => {
  return (
    <label
      htmlFor="contained-button-file"
      className=" bg-primary w-40 mt-10 text-white  rounded-md h-10 flex items-center justify-center cursor-pointer"
    >
      <input
        accept="image/png, image/gif, image/jpeg"
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
