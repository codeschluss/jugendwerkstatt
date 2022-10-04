import { useGetGroupAndCourseQuery } from "../../../GraphQl/graphql";
import { useAuthStore } from "../../../store";

const GroupMe: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore();
  const group = useGetGroupAndCourseQuery({
    skip: !isAuthenticated,
  });
  return isAuthenticated ? (
    <div>
      {group.data && (
        <div className="w-full bg-white my-12 rounded-md flex flex-col items-start p-8">
          <strong
            dangerouslySetInnerHTML={{
              __html: group.data?.me?.course?.group?.name
                ? group.data?.me?.course?.group?.name
                : "",
            }}
          />
          <div
            className="prose-xl"
            dangerouslySetInnerHTML={{
              __html: group.data?.me?.course?.group?.description
                ? group.data?.me?.course?.group?.description
                : "",
            }}
          />
        </div>
      )}
    </div>
  ) : null;
};

export default GroupMe;
