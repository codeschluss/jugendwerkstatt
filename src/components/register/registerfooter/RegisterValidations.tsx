import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

export const RegisterValidations = () => {
  const { passwordBits } = useContext(AuthContext);

  return (
    <div className="w-full mx-auto mb-10 mt-0">
      <p>Passwortstärke</p>
      <div className="flex flex-nowrap justify-between">
        <div
          className={`w-1/6 h-1 rounded-lg ${
            !passwordBits || passwordBits < 15 || passwordBits < 10
              ? "bg-gray-200"
              : "bg-rose-500"
          }`}
        ></div>
        <div
          className={`w-1/6 h-1 rounded-lg ${
            !passwordBits || passwordBits < 15 ? "bg-gray-200" : "bg-rose-500"
          }`}
        ></div>
        <div
          className={`w-1/6 h-1 rounded-lg ${
            !passwordBits || passwordBits < 25 ? "bg-gray-200" : "bg-warning"
          }`}
        ></div>
        <div
          className={`w-1/6 h-1 rounded-lg ${
            !passwordBits || passwordBits < 25 ? "bg-gray-200" : "bg-warning"
          }`}
        ></div>
        <div
          className={`w-1/6 h-1 rounded-lg ${
            !passwordBits || passwordBits < 35 ? "bg-gray-200" : "bg-green-500"
          }`}
        ></div>
      </div>
    </div>
  );
};
