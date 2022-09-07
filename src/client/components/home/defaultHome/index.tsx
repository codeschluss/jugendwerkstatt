import { Link } from "react-router-dom";
import Footer from "../../footer";
import Button from "../../ui/Button";

const DefaultHome: React.FC = () => {
  return (
    <>
      <div className="w-full hidden md:block h-screen   top-0  left-0">
        <img className=" w-full h-full" src="/assets/Background1.png" alt="" />
      </div>
      <div className="w-full  md:bg-white justify-center md:absolute md:h-5/6 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:rounded-2xl md:w-[624px] md:mx-auto h-full  top-0 z-20 m-0 md:pb-5">
        <div className="w-full h-full md:w-10/12 md:h-10/12 md:bg-200 m-auto md:rounded-2xl md:flex md:flex-col md: justify-between">
          <img
            className="w-full md:hidden  mb-7"
            src="/assets/circles-bg.png"
            alt=""
          />
          <div className="flex justify-center">
            <img
              className="my-8 w-52"
              src="/assets/jugendwerkstatt-lg.png"
              alt=""
            />
          </div>
          <p className="text-sm p-2">
            Hallo und Willkommen! <br />
            Dies ist die App der Jugendwerkstatt alpha e.V. in Wuppertal. Du
            bist in der Jugendwerkstatt tätig? Dann geht es hier mit der
            Anmeldung weiter für dich…
            <br /> <br />
            Wenn du noch nicht in der Jugendwerkstatt angemeldet bist, bewirb
            dich bei uns, wir freuen uns auf dich! Weitere Informationen findest
            du unter:{" "}
            <a href="https://www.alphaev.de">https://www.alphaev.de</a>
          </p>
          <div className="my-5  w-[80%] m-auto  h-[10%] flex flex-col md:mb-20 items-center justify-between">
            <Link className="w-full md:w-full md:mb-5" to="/login">
              <Button isDisabled={true} isValidated={true}>
                Login
              </Button>
            </Link>
            <Link className="w-full md:full my-5" to="/register">
              <Button isDisabled={true} isValidated={true}>
                Registrieren
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DefaultHome;
