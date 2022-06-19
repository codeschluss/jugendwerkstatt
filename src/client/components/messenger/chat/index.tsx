/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../../../contexts/AuthContext";
import TokenStorageContext from "../../../../contexts/TokenStorageContext";
import {
  QueryOperator,
  useChatlistenerSubscription,
  useGetChatQuery,
  useGetMeBasicQuery,
  useGetMessagesQuery,
  useSaveMessageMutation,
} from "../../../../GraphQl/graphql";
import ChatText from "./ChatText";

const Chat = () => {
  const { accessToken } = useContext(TokenStorageContext);
  const { id } = useParams();
  const writeMessage: any = useRef();
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
  // const [chat, setChat] = useState<{
  //   content?: string | null;
  //   fullName?: string | null;
  // }>({
  //   content: "",
  //   fullName: "",
  // });

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

  console.log(getMessages.data?.getMessages?.result);
  console.log("test", chatAddlistener.data?.addChatListener);

  const scrollToBottom = () => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(writeMessage.current.value);
    saveMessage({
      variables: {
        entity: {
          chat: {
            id: id,
          },
          content: writeMessage.current.value,
          // parent: {
          //   id: "456588b4-f512-4d78-953c-53dee35b18c0",
          // },
        },
      },
    }).then(() => getMessages.refetch());
  };

  return (
    <div className=" overflow-scroll flex flex-col bg-yellow-50 ">
      <h2>{getChat.data?.getChat?.name}</h2>
      {getMessages.data?.getMessages?.result?.map((el) => {
        const _me: boolean = el?.user?.id === myId ? true : false;
        console.log(myId, el?.id);
        return (
          <ChatText
            key={el?.id}
            content={el?.content}
            name={el?.user?.fullname}
            me={_me}
          />
        );
      })}

      <div ref={messageEnd} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          ref={writeMessage}
          className="bg-[#424242] w-full h-9 relative bottom-0  left-0 text-[#AEAEAE] px-2"
          placeholder="Nachricht"
        />
        <button type="submit" className=" w-6 h-3 bg-primary">
          asd
        </button>
      </form>
    </div>
  );
};

export default Chat;
