import { useContext } from "react";
import Button from "../ui/Button";
import Events from "./Events";
import Jobs from "./Jobs";

const Homepage: React.FC = () => {
  return (
    <>
      <h1 className="p-4 rounded-md bg-white mb-8 text-3xl font-semibold hidden md:block">
        Jugendwerkstatt
      </h1>
      <Events />
      <Jobs />
    </>
  );
};

export default Homepage;
