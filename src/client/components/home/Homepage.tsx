import Events from "./Events";
import Jobs from "./Jobs";

const Homepage: React.FC = () => {
  return (
    <div className="md:m-12">
      <h1 className="p-4rounded-md bg-white mb-8 text-3xl font-semibold hidden md:block">
        Jugendwerkstatt
      </h1>
      <Events />
      <Jobs />
    </div>
  );
};

export default Homepage;
