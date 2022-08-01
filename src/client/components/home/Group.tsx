import { useGetGroupAndCourseQuery } from "../../../GraphQl/graphql";

const GroupMe: React.FC = () => {
  const group = useGetGroupAndCourseQuery();

  return (
    <div className="w-full bg-white my-12 rounded-md flex flex-col items-start p-8">
      <div
        dangerouslySetInnerHTML={{
          __html: group.data?.me?.course?.group?.name
            ? group.data?.me?.course?.group?.name
            : "",
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: group.data?.me?.course?.group?.description
            ? group.data?.me?.course?.group?.description
            : "",
        }}
      />
    </div>
  );
};

export default GroupMe;
