import React from "react";
import { Link } from "react-router-dom";

export const RegisterFooter: React.FunctionComponent<{ type?: string }> = ({
  type,
}) => {
  return (
    <div className="row-start-8 row-end-12">
      <div className="w-full">
        {type === "register" ? (
          <div className="mx-12 pl-1 pb-2">
            <span className="text-sm ">Du hast bereits einen Account?</span>
            <br />
            <Link to="/login">
              {" "}
              <p className="underline font-bold">Jetzt anmelden!</p>
            </Link>
          </div>
        ) : (
          <div className="mx-12 pl-1 pb-2">
            <span className="text-sm ">Noch keinen Account?</span>
            <br />
            <Link to="/register">
              {" "}
              <p className="underline font-bold">Jetzt registrieren!</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
