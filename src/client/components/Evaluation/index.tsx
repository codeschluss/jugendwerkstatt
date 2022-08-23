import { useRef, useState } from "react";
import {
  AnswerEntity,
  AnswerEntityInput,
  AssignmentEntity,
  QuestionEntity,
  useSaveAssignmentMutation,
  useSaveClientAssignmentMutation,
} from "../../../GraphQl/graphql";
import Button from "../ui/Button";
import Question from "./Question";
import Svgs from "./Svgs";
import TitleText from "./TitleText";
interface ModalProps {
  visible: boolean;
  assignment?: AssignmentEntity | undefined | null;
  id?: any;
  refetchParent?: any;
}

const Evaluation: React.FC<ModalProps> = ({
  visible,
  id,
  refetchParent,
  assignment,
}) => {
  const givenAnswers = assignment?.questionnaire?.questions
    ?.map(
      (question: QuestionEntity | undefined | null) =>
        ({
          question: { item: question?.item, id: question?.id },
          rating: null,
        } as AnswerEntityInput)
    )
    .sort(
      (a: any, b: any) =>
        a?.question?.sequenceOrder - b?.question?.sequenceOrder
    );

  const textComment: any = useRef();
  const [saveAssignment] = useSaveClientAssignmentMutation();
  const submitHandler = (e: any) => {
    e.preventDefault();

    saveAssignment({
      variables: {
        entity: {
          id: assignment?.id,
          answers: givenAnswers,
          comment: textComment.current.value,
        },
      },
    }).then(() => refetchParent());
  };

  return (
    <div
      className={`${visible ? "inline-block" : "hidden"}
  absolute backdrop-blur-sm bg-white/30 w-screen h-screen z-50 grid place-items-center left-0`}
    >
      <div className="w-[90vw] max-w-lg h-[80vh] mx-auto   border-[3px] rounded-md bg-gray-100">
        <TitleText />
        <form
          onSubmit={submitHandler}
          className="md:flex md:flex-col md:items-center md:w-full"
        >
          <div>
            <Svgs />
            {givenAnswers?.map(
              (answer: AnswerEntity | undefined | null, index: number) => {
                const changeRating = (rating: number, question: string) => {
                  answer!.rating = rating;
                };

                return (
                  <Question
                    key={index}
                    submitAnswer={changeRating}
                    answer={answer}
                  />
                );
              }
            )}
          </div>

          <div className="w-full h-32 p-1 my-1 md:w-full">
            <textarea
              ref={textComment}
              placeholder="Was ich noch sagen wollte:"
              className="w-full h-full p-2 text-xs rounded-md resize-none md:text-base"
            />
          </div>

          <Button buttonType={"submit"} isDisabled={true} isValidated={true}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Evaluation;
