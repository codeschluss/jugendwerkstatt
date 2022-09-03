import { ReactElement } from 'react';
import * as qs from 'query-string';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetQuestionnaireQuery } from '../../../GraphQl/graphql';
import { Button, Panel, Table } from '../../components/atoms';
import { CustomTable } from '../../components/molecules';
import { ButtonVariantsEnum } from '../../interfaces/enums/ButtonVariants.enum';

const EvaluationQuestionsViewPage = (): ReactElement => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryString = qs.parse(search);
  const { id } = useParams();
  const { data: { questionnaire = null } = {} } = useGetQuestionnaireQuery({
    variables: {
      entity: { id },
      ...(queryString.year && { year: Number(queryString.year) })
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleYearFilter = (year: string | number) => () =>
    navigate(year === 'Alle Jahre' ? `` : `?year=${year}`);

  return (
    <div className="flex flex-col max-w-5xl gap-x-5 md:flex-row">
      <div className="flex-1">
        <div className="p-10 bg-white ">
          <CustomTable
            headerData={['Frage', 'Bewertung Ø']}
            bodyData={
              questionnaire?.questions?.map((question) => (
                <Table.Row key={question?.id}>
                  <Table.Data>{question?.item}</Table.Data>
                  <Table.Data>{question?.averageRating}</Table.Data>
                </Table.Row>
              )) || []
            }
          />
        </div>

        <Panel
          title="Kommentare"
          className="max-w-[50.6rem] mt-5"
          submitButton={false}
        >
          <Panel.Body>
            {questionnaire?.assignments?.map((assignment) => (
              <div
                key={assignment?.id}
                className="p-2 my-2 border border-gray-400"
              >
                <h1>{assignment?.comment || '/'}</h1>
              </div>
            ))}
          </Panel.Body>
        </Panel>
      </div>

      <div className="flex flex-col mx-5 space-y-5 xs:mt-5 md:mt-0">
        <Panel
          title="Jahr"
          className="flex flex-col space-y-5"
          submitButton={false}
        >
          {[2022, 2023, 2024, 'Alle Jahre'].map((label, idx) => (
            <Button
              key={label}
              {...((Number(queryString.year) === Number(label) ||
                idx === 3) && {
                variant: ButtonVariantsEnum.SECONDARY,
              })}
              onClick={handleYearFilter(label)}
              className="w-fit"
            >
              {label}
            </Button>
          ))}
        </Panel>
      </div>
    </div>
  );
};

export default EvaluationQuestionsViewPage;
