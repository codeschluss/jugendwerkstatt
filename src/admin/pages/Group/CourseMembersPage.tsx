import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import {
  useDeleteCourseMemberMutation,
  useGetCourseQuery,
} from '../../../GraphQl/graphql';
import { Action, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const CourseMembersPage = (): ReactElement => {
  const { id } = useParams();

  const { data: { course = null } = {}, refetch: refetchCourse } =
    useGetCourseQuery({
      fetchPolicy: 'cache-and-network',
      variables: { id },
    });
  const [deleteMember] = useDeleteCourseMemberMutation({
    onCompleted: () => refetchCourse(),
  });
  const handleDeleteGroupMember = (userId: string) => () =>
    deleteMember({ variables: { userId, courseId: course?.id || '' } });

  const courseMembers = course?.members || [];

  return (
    <Panel.Wrapper
      action={{
        to: `/admin/courses/${course?.id}/members/new`,
        label: 'Teilnehmer hinzufügen',
      }}
    >
      <CustomTable
        headerData={['Name', 'Gruppe', 'Aktionen']}
        bodyData={courseMembers.map((member) => (
          <Table.Row key={member?.id}>
            <Table.Data>{member?.fullname}</Table.Data>
            <Table.Data>{course?.group?.name}</Table.Data>
            <Table.Data>
              <Action onDelete={handleDeleteGroupMember(member?.id || '')} />
            </Table.Data>
          </Table.Row>
        ))}
      />
    </Panel.Wrapper>
  );
};

export default CourseMembersPage;
