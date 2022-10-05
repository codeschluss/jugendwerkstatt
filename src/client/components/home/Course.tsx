import { useGetGroupAndCourseQuery } from "../../../GraphQl/graphql";
import { useAuthStore } from "../../../store";

const CourseMe: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();

  const course = useGetGroupAndCourseQuery({
    skip: !isAuthenticated,
  });

  return isAuthenticated ? (
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
  ) : null;
};

export default CourseMe;
