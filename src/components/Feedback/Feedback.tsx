import { FeedbackProps } from "./Feedback.props";
import { Header } from "./header/Header";

const feedbacks: FeedbackProps[] = [
  {
    id: 1,
    question: "Question One",
    options: [
      { id: 1, option: "Option 1" },
      { id: 2, option: "Option 2" },
      { id: 3, option: "Option 3" },
      { id: 4, option: "Option 4" },
    ],
  },
  {
    id: 2,
    question: "Question Two",
    options: [
      { id: 1, option: "Option 1" },
      { id: 2, option: "Option 2" },
      { id: 3, option: "Option 3" },
      { id: 4, option: "Option 4" },
    ],
  },
  {
    id: 3,
    question: "Question Three",
    options: [
      { id: 1, option: "Option 1" },
      { id: 2, option: "Option 2" },
      { id: 3, option: "Option 3" },
      { id: 4, option: "Option 4" },
    ],
  },
];

export const Feedback = () => {
  return (
    <>
      <Header />
      
      {feedbacks.map(({ id, question, options }) => (
        <ul key={id} className="flex">
          <li>{id}.</li>
          <li>{question}</li>
          <li className="flex justify-between space-x-2">
            {options.map(({ id, option }) => {
              <>
                <label>{option}</label>
                <input key={id} type="checkbox" id={option} />
              </>;
            })}
          </li>
        </ul>
      ))}
    </>
  );
};
