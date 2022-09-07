import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetChatQuery,
  useSaveChatMutation,
} from "../../../../GraphQl/graphql";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const ChatWriteAccess = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const chat = useGetChatQuery({
    variables: {
      entity: {
        id: id,
      },
    },
  });
  const [value, setValue] = React.useState(chat.data?.getChat?.admin);
  const [saveChatName] = useSaveChatMutation();

  const saveChatSettingsHandler = () => {
    saveChatName({
      variables: {
        entity: {
          id: id,
          admin: value,
        },
      },
    }).then(() => navigate(`/messenger/chat/${id}`));
  };

  return (
    <div className="absolute left-0  md:relative pb-5  w-full  z-50 bg-white top-0     ">
      <div className="h-20 w-full bg-primary p-4 relative flex ">
        <div className="  mx-auto w-full text-2xl text-white  flex items-center justify-center">
          <p>Gruppeneinstellungen</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-5 px-3 ">
        <div className=" text-3xl font-bold">
          {" "}
          <p>Nachrichten senden</p>{" "}
        </div>
        <div className="mt-5">
          <p>Lege fest, wer Nachrichten an diese Gruppe senden darf.</p>
        </div>
      </div>
      <div className="mx-5">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value={false}
              control={<Radio />}
              label="Alle Teilnehmer"
            />
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Nur Lehrende"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="mt-10 px-2  flex items-end w-full">
        <button
          onClick={saveChatSettingsHandler}
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
  );
};

export default ChatWriteAccess;
