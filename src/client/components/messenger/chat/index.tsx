/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ChatText from "./ChatText";
import message from "./testChat.json";

const Chat = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>(message);

  const writeMessage: any = useRef();

  const messageEnd: any = useRef(null);

  const scrollToBottom = () => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const tryMessage = (event: any) => {
    event.preventDefault();

    setData((data: any) => [
      ...data,
      {
        content: writeMessage.current.value,
        messageId: Math.floor(Math.random() * 100),
        senderId: "1",
      },
    ]);
  };

  return (
    <div className=" overflow-scroll flex flex-col ">
      {data?.map((el: any) => {
        return (
          <ChatText
            sender={el.senderId}
            content={el.content}
            key={Math.floor(Math.random() * 1000)}
          />
        );
      })}

      <div ref={messageEnd} />
      <form onSubmit={tryMessage}>
        <input
          type="text"
          ref={writeMessage}
          className="bg-[#424242] w-full h-9 relative bottom-0  left-0 text-[#AEAEAE] px-2"
          placeholder="Nachricht"
        />
        <button type="submit" className=" w-6 h-3 bg-primary"></button>
      </form>
    </div>
  );
};

export default Chat;
