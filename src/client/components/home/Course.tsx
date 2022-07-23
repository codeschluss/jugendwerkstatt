import { useGetGroupAndCourseQuery } from "../../../GraphQl/graphql";

const CourseMe: React.FC = () => {
  const course = useGetGroupAndCourseQuery();

  return (
    <div className="w-full bg-white my-12 rounded-md flex flex-col items-start p-8">
      <div className="font-medium text-lg">{course.data?.me?.course?.name}</div>
      <div className="text-sm my-2">{course.data?.me?.course?.description}</div>
    </div>
  );
};

export default CourseMe;
