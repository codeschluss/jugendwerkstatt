import Events from "./Events";
import Jobs from "./Jobs";
import CourseMe from "./Course";
import GroupMe from "./Group";

const Homepage: React.FC = () => {
  return (
    <div className="md:m-12">
      <h1 className="p-4rounded-md p-3 px-8 bg-white mb-8 text-3xl font-semibold hidden md:block">
        Jugendwerkstatt
      </h1>
      <GroupMe />
      <CourseMe />
      <Events />
      <Jobs />
    </div>
  );
};

export default Homepage;
