import { joiResolver } from "@hookform/resolvers/joi";
import { ReactElement, useEffect } from "react";
import { FieldError, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetQuestionnaireQuery,
  useSaveQuestionnaireMutation,
} from "../../../GraphQl/graphql";
import { Accordion, FormActions, InputField } from "../../components/molecules";
import { EvaluationQuestionList } from "../../components/organisms/EvaluationQuestionList/EvaluationQuestionList";
import { QuestionsInput } from "../../components/organisms/EvaluationQuestionList/EvaluationQuestionList.types";
import { EvaluationsQuestionsFormSchema } from "../../validations/EvaluationsQuestions.schema";

const EvaluationQuestionFormPage = (): ReactElement => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: { questionnaire } = {} } = useGetQuestionnaireQuery({
    skip: !id,
    variables: { entity: { id } },
  });

  const {
    control,
    formState: { isDirty, errors },
    clearErrors,
    reset,
    register,
    handleSubmit,
  } = useForm<QuestionsInput>({
    resolver: joiResolver(EvaluationsQuestionsFormSchema),
    mode: "onTouched",
  });
  const [saveQuestionnaire] = useSaveQuestionnaireMutation({
    onCompleted: () => navigate("/admin/evaluations/questions"),
  });

  useEffect(() => {
    if (id && questionnaire) {
      reset({
        name: questionnaire.name || "",
        questions: questionnaire.questions?.map((question) => ({
          name: question?.item || "",
        })),
      });
    }
  }, [id, questionnaire, reset]);

  console.log(isDirty, !!errors);

  const handleOnSubmit = (data: QuestionsInput) => {
    saveQuestionnaire({
      variables: {
        entity: {
          ...(!!id && { id }),
          name: data.name,
          questions: data.questions.map((question, index) => ({
            item: question.name,
            sequenceOrder: index + 1,
          })),
        },
      },
    });
  };

  return (
    <form className="min-h-full ">
      <Accordion
        title="Stammdaten"
        open={!!id}
        {...(errors.name && {
          className: "border border-primary",
        })}
      >
        <InputField
          id="name"
          label="Name"
          placeholder="Evaluierungsbogen 1"
          {...register("name")}
          error={errors?.name?.message}
        />
      </Accordion>
      <Accordion
        title="Teilnehmerbefragung - Fragen"
        open={!!id}
        {...(errors.questions && {
          className: "border border-primary",
        })}
      >
        <EvaluationQuestionList
          error={errors?.questions as unknown as FieldError}
          errors={errors?.questions}
          clearErrors={clearErrors}
          control={control}
          register={register}
        />
      </Accordion>
      <FormActions
        // preventSubmit={isDirty && !!errors}
        onSubmit={handleSubmit(handleOnSubmit)}
      />
    </form>
  );
};

export default EvaluationQuestionFormPage;
