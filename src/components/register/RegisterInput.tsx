interface RegisterInputsProps {
  register?: any;
  name: string;
  errorDesc: string;
  errors: any;
}

const RegisterInputs: React.FC<RegisterInputsProps> = ({
  register,
  name,
  errors,
  errorDesc,
}) => {
  return (
    <div className="relative group rounded-md px-1 mb-4">
      <input
        {...register(name, { required: true })}
        name={name}
        type="text"
        id={name}
        className="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
      />
      <label
        htmlFor={name}
        className="transform transition-all text-zinc-400 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 group-focus-within:pl-3 peer-valid:pl-3"
      >
        {name}
      </label>
      <p className="text-red-500"> {errors.name && <span>{errorDesc}</span>}</p>
    </div>
  );
};

export default RegisterInputs;
