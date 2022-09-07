import { useGetGroupAndCourseQuery } from "../../../GraphQl/graphql";

const CourseMe: React.FC = () => {
  const course = useGetGroupAndCourseQuery();

  return (
    <div>
      {course.data && (
        <div className="w-full bg-white my-12 rounded-md flex flex-col items-start p-8">
          <strong
            dangerouslySetInnerHTML={{
              __html: course.data?.me?.course?.name
                ? course.data?.me?.course?.name
                : "",
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: course.data?.me?.course?.description
                ? course.data?.me?.course?.description
                : "",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CourseMe;
