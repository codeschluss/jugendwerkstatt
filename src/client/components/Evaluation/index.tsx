import { useState } from "react";
import {
  AnswerEntity,
  AssignmentEntity,
  QuestionEntity,
  useSaveAssignmentMutation,
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
  const givenAnswers = assignment?.questionnaire?.questions?.map(
    (question: QuestionEntity | undefined | null) =>
      ({
        question: question,
        rating: null,
      } as AnswerEntity)
  );

  const [saveAssignment] = useSaveAssignmentMutation();
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(givenAnswers);

    saveAssignment({
      variables: {
        entity: {
          id: assignment?.id,
          answers: givenAnswers,
        },
      },
    }).then((data: any) => console.log(data));
  };

  return (
    <div
      className={`${visible ? "inline-block" : "hidden"}
  absolute backdrop-blur-sm bg-white/30 w-screen h-screen z-50 grid place-items-center left-0`}
    >
      <div className="w-[90vw] max-w-lg h-[80vh] mx-auto  border-[3px] rounded-md bg-gray-100">
        <TitleText />
        <form onSubmit={submitHandler}>
          <div>
            <Svgs />
            {givenAnswers?.map((answer: AnswerEntity | undefined | null) => {
              const changeRating = (rating: number, question: string) => {
                answer!.rating = rating;
              };

              return <Question submitAnswer={changeRating} answer={answer} />;
            })}
          </div>

          <div className="w-full md:w-full h-32 p-1 my-1">
            <textarea
              placeholder="Was ich noch sagen wollte:"
              className="w-full h-full resize-none rounded-md p-2 text-xs md:text-base"
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
