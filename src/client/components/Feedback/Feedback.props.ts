interface OptionsProps {
  id: number;
  option: string;
}

export interface FeedbackProps {
  id: number;
  question: string;
  options: OptionsProps[];
}
