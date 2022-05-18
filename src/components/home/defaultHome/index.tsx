import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const DefaultHome: React.FC = () => {
  return (
    <div className="w-full h-screen m-0">
      <img className="w-full mb-7" src="/assets/home-bg.jpg" alt="" />
      <p className="text-sm p-2">
        Die Jugendwerkstatt ist eine Einrichtung für Jugendliche, die besondere
        Schwierigkeiten beim Übergang von der Schule in das Berufsleben haben.
        In der Jugendwerkstatt können sie sich beruflich orientieren,
        handwerkliche
      </p>
      <div className="my-5 w-[80%] m-auto h-[10%] flex flex-col items-center justify-between">
        <Link className="w-full" to="/login">
          <Button isDisabled={true} isValidated={true}>
            Login
          </Button>
        </Link>
        <Link className="w-full" to="/register">
          <Button isDisabled={true} isValidated={true}>
            Registrieren
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DefaultHome;
