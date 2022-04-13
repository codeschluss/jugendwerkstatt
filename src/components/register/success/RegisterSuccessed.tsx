import React from "react";

const RegisterSuccessed = () => {
  return (
    <div className=" fixed p-3 ">
      <div className="flex flex-col text-center bg-white rounded-md">
        <img src="/assets/successLogo.png" width="50px" height="50px" alt="" />
        <h1 className="my-3 text-2xl">Glückwunsch</h1>
        <p className="mb-3">
          Du wurdest erfolgreich registriert. Zur verifizierung haben wir dir
          einen Link an deine E-Mail-Adresse geschickt.
        </p>
      </div>
    </div>
  );
};

export default RegisterSuccessed;
