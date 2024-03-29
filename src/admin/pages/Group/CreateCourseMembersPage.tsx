import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import {
  ConjunctionOperator,
  QueryOperator,
  useAddCourseMemberMutation,
  useGetCourseQuery,
  useGetUsersAdminQuery,
} from '../../../GraphQl/graphql';
import { Action, Panel, Table } from '../../components/atoms';
import { BackButton, CustomTable } from '../../components/molecules';

const CreateCourseMembersPage = (): ReactElement => {
  const { id } = useParams();

  const { data: { users = null } = {}, refetch: refetchUsers } =
    useGetUsersAdminQuery({
      variables: {
        params: {
          expression: {
            conjunction: {
              operator: ConjunctionOperator.And,
              operands: [
                {
                  conjunction: {
                    operator: ConjunctionOperator.Or,
                    operands: [
                      {
                        entity: {
                          operator: QueryOperator.NotEqual,
                          path: 'course.id',
                          value: id
                        }
                      },
                      {
                        entity: {
                          operator: QueryOperator.Equal,
                          path: 'course.id',
                          value: null
                        }
                      }
                    ]
                  }
                },
                {
                  entity: {
                    operator: QueryOperator.Equal,
                    path: 'approved',
                    value: 'true'
                  }
                },
                {
                  entity: {
                    operator: QueryOperator.Equal,
                    path: 'verified',
                    value: 'true'
                  }
                }
              ]
            }
          }
        },
      },
      fetchPolicy: 'cache-and-network'
    });
    
  const { data: { course = null } = {} } = useGetCourseQuery({
    variables: { id },
  });

  const [addMember] = useAddCourseMemberMutation({
    onCompleted: () => refetchUsers(),
  });

  const handleAddCourseMember = (userId: string) => () =>
    addMember({ variables: { userId, courseId: course?.id || '' } });

  return (
    <Panel.Wrapper>
      <CustomTable
        headerData={['Name', 'Gruppe', 'Aktionen']}
        bodyData={
          (users?.result &&
            users.result.map((user) => (
              <Table.Row key={user?.id}>
                <Table.Data>{user?.fullname}</Table.Data>
                <Table.Data>{course?.group?.name}</Table.Data>
                <Table.Data>
                  <Action onApprove={handleAddCourseMember(user?.id || '')} />
                </Table.Data>
              </Table.Row>
            ))) ||
          []
        }
      />
      <BackButton label="Zurück zur Übersicht" />
    </Panel.Wrapper>
  );
};

export default CreateCourseMembersPage;
