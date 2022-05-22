import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyMutation } from "../../../GraphQl/graphql";

const RegisteredSuccessfully: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [verifyMutation, { data, loading, error }] = useVerifyMutation({
    variables: {
      key: params.id,
    },
  });

  useEffect(() => {
    verifyMutation();
  }, []);

  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#52BD06"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="px-0 flex flex-col w-screen relative">
      {data && (
        <>
          <div className="px-0 bg-bgimg">
            <img
              className="h-full w-screen object-cover"
              src="/assets/background.png"
              alt={"logo"}
            />
          </div>
          <div className="-mt-5 bg-white rounded-3xl">
            <div className="mx-12 flex flex-col text-center">
              <span className="w-full flex justify-center">{checkIcon}</span>
              <h3 className="text-bold text-xl">Glückwunsch</h3>
              <p className="text-gray-600 my-10">
                Du hast deine E-Mail-Adresse erfolgreich verifiziert.
              </p>

              <div className="mx-12 mt-10 pl-1 pb-2 text-center">
                <button
                  onClick={() => navigate("/login")}
                  className="w-full h-8 drop-shadow-md rounded-2xl active:opacity-80 bg-[#C20639] text-white"
                >
                  Zur App
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisteredSuccessfully;
