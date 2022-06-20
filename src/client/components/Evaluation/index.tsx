import { useState } from "react";
import Question from "./Question";
import Questionaire from "./Questionaire";
import TitleText from "./TitleText";
interface ModalProps {
  visible: boolean;
  id?: any;
  refetchParent?: any;
}

const Evaluation: React.FC<ModalProps> = ({ visible, id, refetchParent }) => {
  return (
    <div
      className={`${visible ? "inline-block" : "hidden"}
  absolute backdrop-blur-sm bg-white/30 w-screen h-screen z-50 grid place-items-center left-0`}
    >
      <div className="w-[90vw] max-w-lg h-[80vh] mx-auto  border-[3px] rounded-md bg-gray-100">
        <TitleText />
        <Questionaire />
      </div>
    </div>
  );
};

export default Evaluation;
