import {
  Control,
  FieldError,
  UseFormClearErrors,
  UseFormRegister,
} from 'react-hook-form';

export interface QuestionInput {
  name: string;
}

export interface QuestionsInput {
  name: string;
  questions: QuestionInput[];
}

export interface EvaluationQuestionListProps {
  control: Control<QuestionsInput, any>;
  register: UseFormRegister<QuestionsInput>;
  errors:
    | {
        name?: FieldError | undefined;
      }[]
    | undefined;
  error: FieldError | undefined;
  clearErrors: UseFormClearErrors<QuestionsInput>;
  onDelete?: (id: string) => void;
  onUpdate?: (id: string) => void;
}
