import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteQuestionnaireMutation,
  useGetQuestionnairesQuery,
} from '../../../GraphQl/graphql';
import { Table, Action, Panel } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';

const EvaluationQuestionsPage = (): ReactElement => {
  const navigate = useNavigate();
  const { data: { questionnaires = null } = {}, refetch } =
    useGetQuestionnairesQuery({
      fetchPolicy: 'cache-and-network',
    });
  const [deleteQuestionnaire] = useDeleteQuestionnaireMutation({
    onCompleted: () => refetch(),
  });

  const handleQuestionnaireNavigate = (id: string) => () =>
    navigate(`${id}/view`);
  const handleQuestionnaireUpdate = (id: string) => () => navigate(id);
  const handleQuestionnaireDelete = (id: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Möchten Sie dies löschen?'))
      deleteQuestionnaire({ variables: { id } });
  };

  return (
    <Panel.Wrapper
      action={{
        to: '/admin/evaluation/questions/new',
        label: 'Evaluierungsbogen hinzufügen',
      }}
    >
      <CustomTable
        headerData={['Evaluierungsbogen', 'Erstellungsdatum', 'Aktionen']}
        bodyData={
          questionnaires?.result?.map((questionnaire) => (
            <Table.Row key={questionnaire?.id}>
              <Table.Data>{questionnaire?.name}</Table.Data>
              <Table.Data>
                {dayjs(questionnaire?.created).format('DD.MM.YYYY')}
              </Table.Data>
              <Table.Data>
                <Action
                  onNavigate={handleQuestionnaireNavigate(
                    questionnaire?.id || ''
                  )}
                />
                <Action
                  onUpdate={handleQuestionnaireUpdate(questionnaire?.id || '')}
                />
                <Action
                  onDelete={handleQuestionnaireDelete(questionnaire?.id || '')}
                />
              </Table.Data>
            </Table.Row>
          )) || []
        }
      />
    </Panel.Wrapper>
  );
};

export default EvaluationQuestionsPage;
