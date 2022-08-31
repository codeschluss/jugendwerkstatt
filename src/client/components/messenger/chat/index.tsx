/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  CogIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PhoneIcon,
  XIcon
} from "@heroicons/react/outline";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoChatContext from "../../../../contexts/VideoChatContext";
import {
  MessageEntity,
  ParticipantEntity,
  QueryOperator,
  useChatlistenerSubscription,
  useGetChatQuery,
  useGetMeBasicQuery,
  useGetMessagesQuery,
  useSaveMessageMutation,
  useSaveReadReceiptsMutation
} from "../../../../GraphQl/graphql";
import { readAuthToken } from "../../../../shared/utils";
import TypeInput from "../../forms/upload/TypeInput";
import ChatText from "./ChatText";

const Chat = () => {
  const accessToken = readAuthToken("accessToken") || "";
  const [replyMsg, setReplymsg] = useState<MessageEntity | undefined | null>();
  const navigate = useNavigate();

  const { id } = useParams();
  const chatId = id;
  const inputRef: any = useRef();
  const messageEnd: any = useRef(null);
  const chatAddlistener = useChatlistenerSubscription({
    skip: !accessToken,
    variables: {
      token: accessToken,
    },
  });
  const [saveRec] = useSaveReadReceiptsMutation();

  //prej qetuhit!
  // useEffect(() => {
  //   setVideo(true);
  // }, []);
  //tokeni eshte accessToken var
  //chat id esht id (from params)

  //deri qetu e ma shume

  const getMessages = useGetMessagesQuery({
    fetchPolicy: "network-only",
    variables: {
      params: {
        dir: "desc",
        page: 0,
        size: 10,
        sort: "created",
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

  useEffect(() => {
    const notMyMsg = getMessages?.data?.getMessages?.result?.filter(
      (el: any) => el?.participant?.user?.id !== me.data?.me?.id
    );

    const allUnreadMsg: any = notMyMsg?.map((msg: any) => ({
      message: {
        id: msg.id,
      },
    }));

    if (allUnreadMsg?.length > 0) {
      saveRec({
        variables: {
          entities: allUnreadMsg,
        },
      });
    }
  }, [getMessages.data?.getMessages?.result]);

  const me = useGetMeBasicQuery({
    skip: !accessToken,
  });
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    getMessages.refetch();
  }, [chatAddlistener.data]);

  const getChat = useGetChatQuery({
    fetchPolicy: "network-only",
    variables: {
      entity: { id: id },
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
    const baseMessage = {
      chat: {
        id: id,
      },

      content: inputRef.current.value,
    };
    const parentMedia = {
      media: {
        base64: replyMsg?.media?.base64,
        mimeType: replyMsg?.media?.mimeType,
        name: replyMsg?.media?.name,
        id: replyMsg?.media?.id,
      },
    };

    const parent = {
      parent: {
        content: replyMsg?.content,

        id: replyMsg?.id,
      },
    };

    replyMsg?.media && Object.assign(parent, parentMedia);

    replyMsg?.content && Object.assign(baseMessage, parent);

    if (inputRef.current.value !== "") {
      saveMessage({
        variables: {
          entity: baseMessage,
        },
      })
        .then(() => {
          getMessages.refetch();
          scrollToBottom();
          setReplymsg(null);
        })
        .finally(() => (inputRef.current.value = ""));
    }
  };

  const reverseMessages = getMessages.data?.getMessages?.result
    ?.slice()
    .reverse();

  const uploadHandler = async (e: any) => {
    const file = e.target.files[0];
    const base64: string | any = await convertBase64(file);

    saveMessage({
      variables: {
        entity: {
          chat: {
            id: id,
          },
          media: {
            base64: base64.split(",")[1],
            mimeType: file.type,
            name: file.name,
          },
        },
      },
    }).finally(() => {
      getMessages.refetch();
    });
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const moreMessages = () => {
    getMessages.refetch({
      params: {
        dir: "desc",
        page: 0,
        size:
          getMessages?.data?.getMessages?.result?.length &&
          getMessages?.data?.getMessages?.result?.length + 10,
        sort: "created",
        expression: {
          entity: {
            operator: QueryOperator.Equal,
            path: "chat.id",
            value: id,
          },
        },
      },
    });
  };

  const notMe: any = getChat.data?.getChat?.participants?.filter(
    (el: ParticipantEntity | undefined | null) =>
      el?.user?.id !== me.data?.me?.id
  ) as ParticipantEntity | undefined | null;
  const meParticipant: any = getChat.data?.getChat?.participants?.filter(
    (el: ParticipantEntity | undefined | null) =>
      el?.user?.id === me.data?.me?.id
  ) as ParticipantEntity | undefined | null;

  const unsendMsg = (id: string) => {
    saveMessage({
      variables: {
        entity: {
          id: id,
          content: "message deleted",
          media: null,
        },
      },
    }).then(() => getMessages.refetch());
  };

  const cantWrite: any =
    getChat.data?.getChat?.admin &&
    me.data?.me?.roles?.some((el) => el?.key === "student")
      ? true
      : false;

  const { sendOrAcceptInvitation, setVideoChatId } =
    useContext(VideoChatContext);

  useEffect(() => {
    setVideoChatId(chatId);
  }, []);

  return (
    <div
      className="flex flex-col bg-yellow-50   md:mx-0"
      style={{ height: "calc(100vh - 10.5rem)" }}
    >
      <div className="flex items-center bg-white justify-between">
        <h2 className="sticky px-4 py-3 text-gray-700  cursor-pointer   top-14 ">
          {getChat.data?.getChat?.name
            ? getChat.data?.getChat?.name
            : notMe?.map((el: ParticipantEntity | undefined | null) => {
                return el?.user?.fullname;
              })}
        </h2>
        {getChat.data?.getChat?.name &&
          (me.data?.me?.roles?.some((el) => el?.key === "admin") ||
            me.data?.me?.roles?.some((el) => el?.key === "supervisor")) && (
            <div
              onClick={() =>
                navigate(`/adminMsnPanel/${getChat.data?.getChat?.id}`)
              }
              className="flex text-gray-600 cursor-pointer mr-5 "
            >
              <CogIcon className="w-5" />
              <p>Einstellungen</p>
            </div>
          )}

        {!getChat.data?.getChat?.name && (
          <PhoneIcon
            className="w-5 h-5 mr-7 cursor-pointer"
            onClick={() => sendOrAcceptInvitation(true)}
          />
        )}
      </div>
      <div className="py-3 h-full overflow-y-scroll">
        <p
          onClick={moreMessages}
          className="mx-auto text-center text-xs cursor-pointer text-[#3279a8]"
        >
          show previous messages
        </p>
        {reverseMessages?.map((el: any) => {
          const _me: boolean = meParticipant?.every(
            (data: ParticipantEntity) => data.id === el?.participant?.id
          );
          return (
            <ChatText
              key={el?.id}
              content={el?.content ? el.content : ""}
              name={el?.participant?.user?.fullname}
              media={el?.media}
              me={_me}
              myMsg={_me}
              unsend={() => unsendMsg(el.id)}
              reply={() => setReplymsg(el)}
              parent={el?.parent}
              seen={
                el?.readReceipts?.length === el?.chat?.participants?.length - 1
                  ? true
                  : false
              }
            />
          );
        })}
        <div ref={messageEnd} />
      </div>

      {replyMsg && (
        <div className="w-full h-14 bg-gray-200 px-3 flex py-2">
          <p>replying to:</p>
          <p className="ml-4 bg-white pr-1 pl-2 rounded-lg flex text-gray-400">
            "{replyMsg?.content ? replyMsg.content : replyMsg.media?.name}"
          </p>
          <p className="ml-1">
            <XIcon
              className="w-4 text-black cursor-pointer"
              onClick={() => setReplymsg(null)}
            />
          </p>
        </div>
      )}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:py-6 py-3 md:pl-6 pl-3 pr-3 bg-[#e9e9e9] flex items-center rounded-b-lg sticky bottom-0 overflow-hidden"
      >
        {!cantWrite && (
          <TypeInput hasClass={true} onChange={uploadHandler}>
            <PaperClipIcon className="w-5 mr-2 text-black text-opacity-40" />
          </TypeInput>
        )}

        <input
          disabled={cantWrite}
          type="text"
          ref={inputRef}
          className="relative bottom-0 left-0 w-full h-10 px-4 transition-all duration-500 rounded-full outline-none focus:shadow "
          placeholder={cantWrite ? "Only admins can write" : "Nachricht"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />

        {!cantWrite && (
          <button
            type="submit"
            className={`hover:-translate-y-1 flex justify-center text-black text-opacity-40 duration-500 transform-gpu transition-all ${
              focus ? "translate-x-0 w-14" : "translate-x-6 w-0"
            }`}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        )}
      </form>
    </div>
  );
};

export default Chat;
