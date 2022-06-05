import React, { useContext } from "react";
import logo from "../../images/jugendwerkstatt-logo.png";
import { CheckIcon, MailIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import {
  useSendVerificationMutation,
  useVerifyMutation,
} from "../../../GraphQl/graphql";
import Button from "../../../client/components/ui/Button";

interface CheckingProps {
  verified?: boolean;
  toVerify?: boolean;
  alreadyVerified?: boolean;
  reVerify?: boolean;
}

const RegistrationOrVerification: React.FC<CheckingProps> = ({
  verified,
  toVerify,
  alreadyVerified,
  reVerify,
}) => {
  const { tempEmail } = useContext(AuthContext);

  const [reSendVerification] = useSendVerificationMutation({
    variables: {
      email: tempEmail,
    },
  });

  const reverify = () => {
    reSendVerification();
  };

  const navigate = useNavigate();

  return (
    <div className="px-0 flex flex-col w-screen h-screen absolute top-0 z-20">
      <div className="px-0 h-[30%]">
        <img className="h-full w-screen object-cover" src={logo} alt={"logo"} />
      </div>
      <div className="grid grid-rows-12 flex-grow w-screen h-full px-10 -mt-6 rounded-3xl bg-white">
        <div className="row-span-6 text-center pt-5 flex flex-col items-center justify-center">
          {verified ? (
            <CheckIcon className="w-24 h-24 text-[#04915C]" />
          ) : (
            <MailIcon className="w-24 h-24 text-[#04915C]" />
          )}
        </div>
        <div className="text-gray-500 row-span-6 text-center text-xs px- -mt-10 flex flex-col ">
          <span className="text-xl">
            {(verified || toVerify) && "Gluckwunsch"}
          </span>
          <span className="text-xl">
            {reVerify && "Uberprufe deine E-Mail"}
          </span>

          {toVerify && (
            <>
              <span className="my-5">Du wurdest erfolgreich registriert.</span>
              <span>
                Wir haben einen Link an deine E-Mail-Adresse gesendet, damit du
                diese verifizieren kannst.
              </span>
            </>
          )}
          {verified && (
            <>
              <span className="my-5">
                Du hast deine E-Mail-Adresse erfolgreich verifiziert.{" "}
              </span>
            </>
          )}
          {alreadyVerified && (
            <>
              <span className="my-5">
                Deine E-Mail-Adresse wurde bereits verifiziert.{" "}
              </span>
            </>
          )}
          {reVerify && (
            <>
              <span className="my-5">
                Du hast noch keinen verifizierungslink erhalten?
              </span>
              <span>
                <p className="underline" onClick={reverify}>
                  Link nochmal senden
                </p>
              </span>
            </>
          )}
        </div>
        <Button
          click={() => navigate("/")}
          isValidated={true}
          isDisabled={true}
        >
          Zur App
        </Button>
      </div>
    </div>
  );
};

export default RegistrationOrVerification;
