import React from "react";

interface ButtonProps {
  isValidated: boolean;
  isDisabled: boolean;
}

export const RegisterFooter: React.FunctionComponent<ButtonProps> = ({
  isValidated,
  isDisabled,
}) => {
  return (
    <div className="row-start-8 row-end-12">
      <div className="w-screen">
        <div className="mx-12 pl-1 pb-2 text-center">
          <button
            disabled={!isDisabled}
            type="submit"
            style={{ background: isValidated ? "#C20639" : "#c2063898" }}
            className="w-full h-8 drop-shadow-md rounded-2xl active:opacity-80  text-white"
          >
            Registrieren
          </button>
        </div>
      </div>
      <div className="w-screen">
        <div className="mx-12 pl-1 pb-2">
          <span className="text-sm ">Du hast bereits einen Account?</span>
          <br />
          <br />
          <a href="#" className="underline font-bold">
            Jetzt anmelden!
          </a>
        </div>
      </div>
    </div>
  );
};
