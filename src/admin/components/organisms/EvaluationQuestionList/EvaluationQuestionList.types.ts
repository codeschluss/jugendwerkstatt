import { Control, FieldError, UseFormRegister } from "react-hook-form";

export interface QuuestionInput {
  name: string;
  questionId?: string;
}

export interface QuestionsInput {
  questions: QuuestionInput[];
  name: string;
}

export interface EvaluationQuestionListProps {
  control: Control<QuestionsInput, any>;
  register: UseFormRegister<QuestionsInput>;
  errors:
    | {
        name?: FieldError | undefined;
        questionId?: FieldError | undefined;
      }[]
    | undefined;
  onDelete?: (id: string) => void;
  onUpdate?: (id: string) => void;
}
