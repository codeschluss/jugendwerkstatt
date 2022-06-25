export const RegisterValidations = ({
  passwordBits,
}: {
  passwordBits: number;
}) => {
  return (
    <div className="w-full mx-auto mt-0 mb-10">
      <p>Passwortstärke</p>
      <div className="flex justify-between flex-nowrap">
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
