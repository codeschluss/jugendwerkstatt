import React from "react";
import {
  AssignmentEntity,
  QuestionEntity,
  QuestionnaireEntity,
  useGetMeAssignmentsQuery,
} from "../../../GraphQl/graphql";
import Button from "../ui/Button";
import Question from "./Question";

const Questionaire = () => {
  const questions = useGetMeAssignmentsQuery();

  return (
    <div>
      <div>
        <Question question="Die Arbeit in der Jugendwerkstatt hat mir Spaß gemacht." />
        <Question question="Die Arbeit in der Jugendwerkstatt hat mir Spaß gemacht." />
        <Question question="Die Arbeit in der Jugendwerkstatt hat mir Spaß gemacht." />
        <Question question="Die Arbeit in der Jugendwerkstatt hat mir Spaß gemacht." />
        <Question question="Die Arbeit in der Jugendwerkstatt hat mir Spaß gemacht." />
      </div>

      <div className="w-full md:w-full h-32 p-1 my-1">
        <textarea
          placeholder="Was ich noch sagen wollte:"
          className="w-full h-full resize-none rounded-md p-2 text-xs md:text-base"
        />
      </div>

      <Button>Send</Button>
    </div>
  );
};

export default Questionaire;
