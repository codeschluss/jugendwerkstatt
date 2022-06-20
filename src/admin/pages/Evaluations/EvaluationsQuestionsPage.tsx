import { ReactElement } from "react";
import {
  useDeleteQuestionMutation,
  useGetQuestionsQuery,
} from "../../../GraphQl/graphql";
import List from "../../components/molecules/List/List";

const EvaluationsQuestionsPage = (): ReactElement => {
  const { data, refetch: refetchQuestions } = useGetQuestionsQuery();

  const [deleteQuestion] = useDeleteQuestionMutation({
    onCompleted: () => refetchQuestions(),
  });

  const handleEditQuestion = () =>
    console.log("We need a view for editing questions!");
  const handleDeleteQuestion = (questionId: string) => () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Möchten Sie dies löschen?")) {
      deleteQuestion({ variables: { questionId } });
    }
  };

  return (
    <List title="Teilnehmerbefragung - Fragen">
      {data?.questions?.result &&
        data.questions.result.map((question) => (
          <List.Item
            key={question?.id}
            onUpdate={handleEditQuestion}
            onDelete={handleDeleteQuestion(question?.id || "")}
          >
            {question?.item}
          </List.Item>
        ))}
    </List>
  );
};

export default EvaluationsQuestionsPage;
