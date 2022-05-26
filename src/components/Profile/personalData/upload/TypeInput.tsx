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
    <label htmlFor="contained-button-file" className="m-0 h-full w-full">
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
