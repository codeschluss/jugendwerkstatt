import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { RegisterInput } from "../RegisterInput";

export const RegisterValidations = () => {
  const { passwordBits } = useContext(AuthContext);
  console.log(passwordBits, "pbits");

  return (
    <div className="w-full mx-auto mb-10 mt-0">
      <p>Passwortstärke</p>
      <div className="flex flex-nowrap justify-between">
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 40 ? "bg-gray-200" : "bg-green-500"
          }`}
        ></div>
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 20 ? "bg-gray-200" : "bg-green-500"
          }`}
        ></div>
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 20 ? "bg-gray-200" : "bg-green-500"
          }`}
        ></div>
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 20 ? "bg-gray-200" : "bg-green-500"
          }`}
        ></div>
      </div>
    </div>
  );
};
