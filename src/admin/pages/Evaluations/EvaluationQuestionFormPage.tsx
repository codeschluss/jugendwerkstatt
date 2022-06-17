import { joiResolver } from '@hookform/resolvers/joi';
import { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetQuestionsQuery,
  useSaveQuestionnaireMutation,
} from '../../../GraphQl/graphql';
import { Button } from '../../components/atoms';
import { Accordion, FormActions, InputField } from '../../components/molecules';
import { EvaluationQuestionList } from '../../components/organisms/EvaluationQuestionList/EvaluationQuestionList';
import { QuestionsInput } from '../../components/organisms/EvaluationQuestionList/EvaluationQuestionList.types';
import { EvaluationsQuestionsFormSchema } from '../../validations/EvaluationsQuestions.schema';

const EvaluationQuestionFormPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: { questions = null } = {} } = useGetQuestionsQuery({
    skip: !id,
  });
  // const [deleteQuestion] = useDeleteQuestionMutation({
  //   onCompleted: () => refetch(),
  // });

  const {
    control,
    formState: { errors },
    reset,
    trigger,
    register,
    handleSubmit,
  } = useForm<QuestionsInput>({
    resolver: joiResolver(EvaluationsQuestionsFormSchema),
  });
  const [saveQuestionnaire] = useSaveQuestionnaireMutation({
    onCompleted: () => navigate('/admin/evaluation/questions'),
  });

  // const handleEditQuestion = () => {
  //   console.log("We need a view for editing questions!");
  // };

  // const handleDeleteQuestion = (questionId: string) => () => {
  //   // eslint-disable-next-line no-restricted-globals
  //   if (confirm("Möchten Sie dies löschen?")) {
  //     deleteQuestion({ variables: { questionId } });
  //   }
  // };

  const handleOnSubmit = (data: QuestionsInput) => {
    console.log(data);
    // saveQuestionnaire({
    //   variables: {
    //     entity: {
    //       name: data.name,
    //       questions: data.questions.map((question) => ({
    //         item: question.name,
    //         sequenceOrder: Number(question.questionId),
    //       })),
    //     },
    //   },
    // });
  };

  const handleTrigger = () => trigger('name');
  const handleReset = () => reset();

  useEffect(() => {
    if (!!questions?.result) {
      reset({
        questions: questions?.result?.map((question) => ({
          questionId: question?.id || '',
          name: question?.item || '',
        })),
      });
    }
  }, [questions, reset]);

  return (
    <form className="min-h-full ">
      <Accordion title="Stammdaten">
        <InputField
          id="name"
          label="Name"
          placeholder="Evaluierungsbogen 1"
          {...register('name')}
          error={errors?.name?.message}
        />

        <Button className="mt-6" type="button" onClick={handleTrigger}>
          Speichern
        </Button>
      </Accordion>
      <Accordion title="Teilnehmerbefragung - Fragen">
        <EvaluationQuestionList
          errors={errors?.questions}
          control={control}
          register={register}
        />
      </Accordion>
      <FormActions
        onReset={handleReset}
        onSubmit={handleSubmit(handleOnSubmit)}
      />
    </form>
  );
};

export default EvaluationQuestionFormPage;
