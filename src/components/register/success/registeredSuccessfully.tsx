import React from "react";

const registeredSuccessfully = () => {
  return (
    <div className="px-0 flex flex-col w-screen relative">
      <div className="px-0 bg-bgimg">
        <img
          className="h-full w-screen object-cover"
          src="/assets/background.png"
          alt={"logo"}
        />
      </div>
      <div className="-mt-5 bg-white rounded-3xl">
        <div className="mx-12 flex flex-col text-center">
          <h3 className="text-bold text-xl">Glückwunsch</h3>
          <p className="text-gray-600 my-10">
            Du wurdest erfolgreich registriert.
          </p>
          <p className="text-gray-600">
            Wir haben einen Link an deine E-Mail-Adresse gesendet, damit du
            diese verifizieren kannst.
          </p>
          <div className="mx-12 mt-52 pl-1 pb-2 text-center">
            <button
              type="submit"
              className="w-full h-8 drop-shadow-md rounded-2xl active:opacity-80 bg-[#C20639] text-white"
            >
              E-Mail verifizieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registeredSuccessfully;
