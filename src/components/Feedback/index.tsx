import { FeedbackProps } from "./Feedback.props";
import { Header } from "./header/Header";
import { EmojiHappyIcon } from "@heroicons/react/solid";
import I from "../ui/IconWrapper";
import Button from "../ui/Button";

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

const Feedback = () => {
  return (
    <div className="p-5 bg-gray-100 h-screen text-sm">
      <Header />

      <ul className="flex">
        <li className="w-1/3 py-1"></li>
        <li className="flex w-2/3 h-20 text-center bg-white ml-1 justify-around">
          <ul className="w-full flex">
            <li className="border-gray-100 border-2">Stimmt genau 🙂🙂</li>
            <li className="border-gray-100 border-2">Stimmt fast 🙂</li>
            <li className="border-gray-100 border-2">Stimmt etwas☹️</li>
            <li className="border-gray-100 border-2">Stimmt garnicht ☹️☹️</li>
          </ul>
        </li>
      </ul>
      {feedbacks.map(({ id, question, options }) => (
        <ul key={id} className="flex w-full  p-1">
          <li className="bg-white w-1/3 py-1 pl-1">
            {id}. {question}
          </li>
          <li className="flex w-2/3 bg-white ml-1 items-center justify-around space-x-2">
            <input
              className="my-3 h-3 w-3 border-gray-100 border-2"
              type="radio"
              name={`${id}`}
              id="1"
            />
            <input
              className="my-3 h-3 w-3 border-gray-100 border-2"
              type="radio"
              name={`${id}`}
              id="2"
            />
            <input
              className="my-3 h-3 w-3 border-gray-100 border-2"
              type="radio"
              name={`${id}`}
              id="3"
            />
            <input
              className="my-3 h-3 w-3 border-gray-100 border-2"
              type="radio"
              name={`${id}`}
              id="4"
            />

            {/* {options.map(({ id, option }) => {
              <>
                <label>
                  {option}
                  <input className="" key={id} type="checkbox" id={option} />
                </label>
                asdas
              </>;
            })} */}
          </li>
        </ul>
      ))}
      <textarea
        className="w-full h-44 my-3"
        name="asd"
        id="asd"
        placeholder="Was ich noch sagen wollte:"
      ></textarea>
      <Button isValidated={true} isDisabled={false} buttonType={"submit"}>
        Submit
      </Button>
    </div>
  );
};

export default Feedback;
