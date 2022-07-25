import { useGetGroupAndCourseQuery } from "../../../GraphQl/graphql";

const GroupMe: React.FC = () => {
  const group = useGetGroupAndCourseQuery();

  return (
    <div className="w-full bg-white my-12 rounded-md flex flex-col items-start p-8">
      <div className="font-medium text-lg">
        {group.data?.me?.course?.group?.name}
      </div>
      <div className="text-sm my-2">
        {group.data?.me?.course?.group?.description}
      </div>
    </div>
  );
};

export default GroupMe;
