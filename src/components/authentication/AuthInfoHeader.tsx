import React from "react";

const AuthInfoHeader = () => {
  return (
    <div
      className="w-[80%]  h-[80%] bg white absolute z-10
     bg-white rounded-md top-4 flex justify-center
      items-center  flex-col text-center p-3"
    >
      <div className="border-[1px] border-gray-600 rounded-lg w-14 h-14"></div>
      <p className="text-lg font-semibold">Gluckwunsch</p>
      <p className="text-sm">
        Du wurdest erfolgreich registriert. Zur verifizierung haben wir dir
        einen Link an deine E-Mail-Adresse geschickt.
      </p>
    </div>
  );
};

export default AuthInfoHeader;
