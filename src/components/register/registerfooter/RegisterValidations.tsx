import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

export const RegisterValidations = () => {
  const { passwordBits } = useContext(AuthContext);
  console.log(passwordBits, "pbits");

  return (
    <div className="w-full mx-auto mb-10 mt-0">
      <p>Passwortstärke</p>
      <div className="flex flex-nowrap justify-between">
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 5 || passwordBits < 10
              ? "bg-gray-200"
              : "bg-rose-500"
          }`}
        ></div>
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 15 ? "bg-gray-200" : "bg-rose-500"
          }`}
        ></div>
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 35 ? "bg-warning" : "bg-green-500"
          }`}
        ></div>
        <div
          className={`w-1/5 h-1 rounded-lg ${
            !passwordBits || passwordBits < 35 ? "bg-warning" : "bg-green-500"
          } ${passwordBits < 10 ? "bg-primary" : "bg-green-500"}`}
        ></div>
      </div>
    </div>
  );
};
