import React from "react";

export const RegisterFooter: React.FunctionComponent = () => {
  return (
    <div className="row-start-8 row-end-12">
      <div className="w-screen"></div>
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
