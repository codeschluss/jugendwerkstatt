import { RegisterInput } from "../RegisterInput";

export const RegisterValidations = () => {
  return (
    <div className="w-full mx-auto mb-10 mt-0">
      <p>Passwortstärke</p>
      <div className="flex flex-nowrap justify-between">
        <div className="w-1/5 h-1 rounded-lg bg-gray-200"></div>
        <div className="w-1/5 h-1 rounded-lg bg-gray-200"></div>
        <div className="w-1/5 h-1 rounded-lg bg-gray-200"></div>
        <div className="w-1/5 h-1 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
};
