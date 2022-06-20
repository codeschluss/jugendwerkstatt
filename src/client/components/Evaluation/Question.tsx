import React, { useState } from "react";
import Radio from "@mui/material/Radio";

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <div className=" flex my-0.5">
      <div className="text-xs w-36 bg-white h-16 ml-1 flex justify-center items-center p-1">
        {" "}
        <p>{question}</p>
      </div>
      <div className="bg-white  h-16 flex justify-center items-center ml-0.5">
        <Radio
          checked={selectedValue === 1}
          onChange={() => setSelectedValue(1)}
          value={1}
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
      </div>
      <div className="bg-white  h-16 flex justify-center items-center ml-0.5">
        <Radio
          checked={selectedValue === 2}
          onChange={() => setSelectedValue(2)}
          value={2}
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </div>
      <div className="bg-white  h-16 flex justify-center items-center ml-0.5">
        <Radio
          checked={selectedValue === 3}
          onChange={() => setSelectedValue(3)}
          value={3}
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </div>
      <div className="bg-white  h-16 flex justify-center items-center ml-0.5">
        <Radio
          checked={selectedValue === 4}
          onChange={() => setSelectedValue(4)}
          value={4}
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </div>
    </div>
  );
};

export default Question;
