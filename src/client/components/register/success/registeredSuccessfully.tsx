import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyMutation } from "../../../../GraphQl/graphql";

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
      className="w-20 h-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#52BD06"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="absolute top-0 z-20 flex flex-col w-full h-full px-0">
      {data && (
        <>
          <div className="px-0 h-1/2">
            <img
              className="object-cover w-full h-full "
              src="/assets/background.png"
              alt={"logo"}
            />
          </div>
          <div className="-mt-5 bg-white rounded-3xl">
            <div className="flex flex-col mx-12 text-center">
              <span className="flex justify-center w-full">{checkIcon}</span>
              <h3 className="text-xl text-bold">Glückwunsch</h3>
              <p className="my-10 text-gray-600">
                Du hast deine E-Mail-Adresse erfolgreich verifiziert.
              </p>

              <div className="pb-2 pl-1 mx-12 mt-10 text-center">
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
