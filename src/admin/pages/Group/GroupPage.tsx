import { ReactElement, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ForceRefetchContext from "../../../contexts/ForceRefetchContext";
import {
  useDeleteCourseMutation,
  useGetGroupQuery,
} from "../../../GraphQl/graphql";
import { Action, Panel, Table } from "../../components/atoms";
import { CustomTable } from "../../components/molecules";

const GroupPage = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { reRender, setReRender } = useContext(ForceRefetchContext);
  const { data: { group = null } = {}, refetch } = useGetGroupQuery({
    fetchPolicy: "cache-and-network",
    variables: { entity: { id } },
  });
  const [deleteCourse] = useDeleteCourseMutation({
    onCompleted: () => {
      refetch();
      setReRender(!reRender);
    },
  });

  const handleEditGroupCourse = (courseId: string) => () =>
    navigate(`/admin/groups/${id}/courses/${courseId}`);
  const handleDeleteGroupCourse = (courseId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?"))
      deleteCourse({ variables: { id: courseId } });
  };

  const groupCourses = group?.courses || [];

  return (
    <Panel.Wrapper
      action={{
        to: `/admin/groups/${group?.id || ""}/courses/new`,
        label: "Neuen Kurs anlegen",
      }}
    >
      <CustomTable
        headerData={["Kursname", "Aktionen"]}
        bodyData={groupCourses?.map((course) => (
          <Table.Row key={course?.id}>
            <Table.Data>{course?.name}</Table.Data>
            <Table.Data>
              <Action
                onUpdate={handleEditGroupCourse(course?.id || "")}
                onDelete={handleDeleteGroupCourse(course?.id || "")}
              />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default GroupPage;
