import { CheckIcon, MailIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../client/components/ui/Button";
// import AuthContext from "../../../contexts/AuthContext";
import { useSendVerificationMutation } from "../../../GraphQl/graphql";
import { useAuth } from "../../../hooks/useAuth";
import { useAuthStore } from "../../../store";
import { useTempEmailStore } from "../../../store/tempEmail/tempEmail.store";
import logo from "../../images/jugendwerkstatt-logo.png";

interface CheckingProps {
  verified?: boolean;
  toVerify?: boolean;
  alreadyVerified?: boolean;
  reVerify?: boolean;
  pendingApproval?: boolean;
}

const RegistrationOrVerification: React.FC<CheckingProps> = ({
  verified,
  toVerify,
  alreadyVerified,
  reVerify,
  pendingApproval,
}) => {
  const { tempEmail } = useTempEmailStore();
  const { handleLogout } = useAuth();
  const { isAuthenticated } = useAuthStore();

  const logoutHandler = () => {
    if (isAuthenticated) {
      handleLogout();
    }
    navigate("/");
  };

  const [reSendVerification] = useSendVerificationMutation({
    variables: {
      email: tempEmail,
    },
  });

  const navigate = useNavigate();

  const reverify = () => {
    reSendVerification().then(() => {
      navigate("/");
      alert("Neuer link erfolgreich gesendet");
    });
  };

  return (
    <div className="absolute top-0 z-20 flex flex-col w-full h-full px-0">
      <div className="px-0 h-1/2">
        <img className="object-cover w-full h-full" src={logo} alt={"logo"} />
      </div>
      <div className="grid flex-grow w-screen h-full px-10 -mt-6 bg-white grid-rows-12 rounded-3xl">
        <div className="flex flex-col items-center justify-center row-span-6 pt-5 text-center">
          {verified ? (
            <CheckIcon className="w-24 h-24 text-[#04915C]" />
          ) : (
            <MailIcon className="w-24 h-24 text-[#04915C]" />
          )}
        </div>
        <div className="flex flex-col row-span-6 -mt-10 text-xs text-center text-gray-500 px- ">
          <span className="text-xl">
            {(verified || toVerify) && "Glückwunsch"}
          </span>
          <span className="text-xl">
            {reVerify && "Überprüfe deine E-Mails"}
          </span>

          {toVerify && (
            <>
              <span className="my-5">Du wurdest erfolgreich registriert.</span>
              <span>
                Wir haben einen Link an deine E-Mail Adresse gesendet, damit du
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
                <p className="underline cursor-pointer" onClick={reverify}>
                  Link nochmal senden
                </p>
              </span>
            </>
          )}
        </div>
        <Button click={logoutHandler} isValidated={true} isDisabled={true}>
          Zur App
        </Button>
      </div>
    </div>
  );
};

export default RegistrationOrVerification;
