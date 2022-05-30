import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const DefaultHome: React.FC = () => {
  return (
    <div className="w-full md:w-1/2   h-full absolute top-0 z-20 m-0 md:pb-5">
      <img className="w-full   mb-7" src="/assets/circles-bg.png" alt="" />
      <div className="flex justify-center">
        <img
          className="my-8 w-52"
          src="/assets/jugendwerkstatt-lg.png"
          alt=""
        />
      </div>
      <p className="text-sm p-2">
        Die Jugendwerkstatt ist eine Einrichtung für Jugendliche, die besondere
        Schwierigkeiten beim Übergang von der Schule in das Berufsleben haben.
        In der Jugendwerkstatt können sie sich beruflich orientieren,
        handwerkliche
      </p>
      <div className="my-5 w-[80%] m-auto h-[10%] flex flex-col items-center justify-between">
        <Link className="w-full md:w-1/4" to="/login">
          <Button isDisabled={true} isValidated={true}>
            Login
          </Button>
        </Link>
        <Link className="w-full md:w-1/4" to="/register">
          <Button isDisabled={true} isValidated={true}>
            Registrieren
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DefaultHome;
