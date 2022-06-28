/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  QueryOperator,
  useChatlistenerSubscription,
  useGetChatQuery,
  useGetMeBasicQuery,
  useGetMessagesQuery,
  useSaveMessageMutation,
} from "../../../../GraphQl/graphql";
import ChatText from "./ChatText";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { readAuthToken } from "../../../../shared/utils";

const Chat = () => {
  const accessToken = readAuthToken("accessToken") || "";

  const { id } = useParams();
  const inputRef: any = useRef();
  const messageEnd: any = useRef(null);
  const chatAddlistener = useChatlistenerSubscription({
    skip: !accessToken,
    variables: {
      token: accessToken,
    },
  });

  const me = useGetMeBasicQuery({
    skip: !accessToken,
  });
  const myId = me.data?.me?.id;
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (id === chatAddlistener.data?.addChatListener?.data?.chat) {
      getMessages.refetch();
    }
  }, [chatAddlistener.data?.addChatListener]);

  const getChat = useGetChatQuery({
    variables: {
      entity: { id: id },
    },
  });
  console.log(getChat.data?.getChat?.participants, "participants");
  const getMessages = useGetMessagesQuery({
    fetchPolicy: "network-only",
    variables: {
      params: {
        dir: "desc",
        page: 0,
        size: 10,
        sort: "modified",
        expression: {
          entity: {
            operator: QueryOperator.Equal,
            path: "chat.id",
            value: id,
          },
        },
      },
    },
  });

  const [saveMessage] = useSaveMessageMutation();

  const scrollToBottom = () => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    saveMessage({
      variables: {
        entity: {
          chat: {
            id: id,
          },
          content: inputRef.current.value,
          // parent: {
          //   id: "456588b4-f512-4d78-953c-53dee35b18c0",
          // },
        },
      },
    })
      .then(() => {
        scrollToBottom();
        getMessages.refetch();
      })
      .finally(() => (inputRef.current.value = ""));
  };

  const reverseMessages = getMessages.data?.getMessages?.result
    ?.slice()
    .reverse();

  return (
    <div
      className="flex flex-col bg-[#eee] rounded-lg  md:mx-0"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <h2 className="sticky px-4 py-3 font-semibold bg-white border-b-2 rounded-b-lg top-14">
        {getChat.data?.getChat?.name}
      </h2>
      <div className="py-3 h-full">
        {reverseMessages?.map((el) => {
          const _me: boolean = el?.user?.id === myId ? true : false;
          return (
            <ChatText
              key={el?.id}
              content={el?.content}
              name={el?.user?.fullname}
              me={_me}
            />
          );
        })}
      </div>
      <div ref={messageEnd} />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:py-6 py-3 md:pl-6 pl-3 pr-3 bg-[#e9e9e9] flex items-center rounded-b-lg sticky bottom-0 overflow-hidden"
      >
        <input
          type="text"
          ref={inputRef}
          className="relative bottom-0 left-0 w-full h-10 px-4 transition-all duration-500 rounded-full outline-none focus:shadow "
          placeholder="Nachricht"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />

        <button
          type="submit"
          className={`hover:-translate-y-1 flex justify-center text-black text-opacity-40 duration-500 transform-gpu transition-all ${
            focus ? "translate-x-0 w-14" : "translate-x-6 w-0"
          }`}
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
