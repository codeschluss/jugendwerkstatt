import { ChevronLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetChatQuery,
  useSaveChatMutation,
} from "../../../../GraphQl/graphql";
import useInput from "../../../../hooks/use-input";
import Button from "../../ui/Button";

const ChangeGroupName = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const chat = useGetChatQuery({
    variables: {
      entity: {
        id: id,
      },
    },
  });

  const [saveChatName] = useSaveChatMutation();

  const {
    value: enteredName,
    validity: enteredNameValidity,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value: string) => value !== "", chat?.data?.getChat?.name);

  const saveChatNameHandler = () => {
    saveChatName({
      variables: {
        entity: {
          id: id,
          name: enteredName,
        },
      },
    }).then(() => navigate(`/messenger/chat/${id}`));
  };

  return (
    <div className="absolute md:relative pb-5  w-full h-full z-50 bg-white top-0 md:h-screen     ">
      <div className="h-20 w-full bg-primary p-4 relative flex ">
        <div className="  mx-auto w-full text-2xl text-white  flex items-center justify-center">
          <p>Gruppennamen ändern</p>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center mt-10">
          <input
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            className="w-1/2  border-b-2 border-gray-600 px-1 "
          />
        </div>

        <div className="mt-10 px-2 h-full  flex items-end w-full">
          <button
            disabled={!enteredNameValidity}
            onClick={saveChatNameHandler}
            className="w-1/2 rounded-tl-2xl h-10 m-1 bg-gray-500 text-white "
          >
            Änderungen speichern
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-1/2 rounded-tr-2xl h-10 m-1 bg-gray-500 text-white "
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeGroupName;
