import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import {
  QueryOperator,
  useGetAssignmentQuery,
  useGetQuestionnairesQuery,
  useGetUsersAdminQuery,
  useSaveAssignmentMutation,
} from '../../../GraphQl/graphql';
import { Select } from '../../components/atoms';
import { Accordion, FormActions } from '../../components/molecules';
import { twClsx } from '../../utils';
import { EvaluationAssignmentFormSchema } from '../../validations/EvaluationAssignmentForm.schema';
import { EvaluationFormInputs } from './EvaluationForm.props';

const CreateEvaluationAssignmentPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: { assignment = null } = {}, loading } = useGetAssignmentQuery({
    skip: !id,
    variables: { entity: { id } },
    fetchPolicy: 'cache-and-network',
  });
  const { data: { users = null } = {} } = useGetUsersAdminQuery({
    variables: {
      params: {
        expression: {
          entity: {
            operator: QueryOperator.Equal,
            path: 'approved',
            value: 'true',
          },
        },
      },
    },
  });
  const { data: { questionnaires = null } = {} } = useGetQuestionnairesQuery();
  const [saveAssignment] = useSaveAssignmentMutation({
    onCompleted: () => navigate('/admin/evaluations/assignments'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EvaluationFormInputs>({
    resolver: joiResolver(EvaluationAssignmentFormSchema),
  });

  useEffect(() => {
    if (id && assignment) {
      reset({
        userId: assignment.user?.id || '',
        evaluationQuestionId: assignment.questionnaire?.id || '',
      });
    }
  }, [assignment, id, reset]);

  const onSubmit = ({ userId, evaluationQuestionId }: EvaluationFormInputs) => {
    saveAssignment({
      variables: {
        entity: {
          ...(id && { id }),
          user: { id: userId },
          questionnaire: { id: evaluationQuestionId },
        },
      },
    });
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <form className="min-h-full">
      <Accordion
        title="Stammdaten"
        open={!!id}
        className={twClsx(
          (errors.userId || errors.evaluationQuestionId) &&
            'border border-primary'
        )}
      >
        <div className="space-y-6">
          <div>
            <Select id="user" label="Benutzer/in" {...register('userId')}>
              {!assignment && (
                <option value="">Wählen Sie einen Benutzer aus</option>
              )}
              {users?.result?.map((user) => (
                <option key={user?.id} value={user?.id || ''}>
                  {user?.fullname}
                </option>
              ))}
            </Select>
            {errors.userId && (
              <p className="text-primary">{errors.userId.message}</p>
            )}
          </div>

          <div>
            <Select
              label="Evaluierungsbogen"
              {...register('evaluationQuestionId')}
              placeholder="Choose an Option"
            >
              {!assignment && (
                <option value="">Wählen Sie eine Bewertung aus</option>
              )}
              {questionnaires?.result?.map((questionnaire) => (
                <option key={questionnaire?.id} value={questionnaire?.id || ''}>
                  {questionnaire?.name}
                </option>
              ))}
            </Select>
            {errors.evaluationQuestionId && (
              <p className="text-primary">
                {errors.evaluationQuestionId.message}
              </p>
            )}
          </div>
        </div>
      </Accordion>
      <FormActions onSubmit={handleSubmit(onSubmit)} />
    </form>
  );
};

export default CreateEvaluationAssignmentPage;
