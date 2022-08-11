import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../../config/app";
import {
  ParticipantEntity,
  useGetChatQuery,
  useSaveChatMutation,
} from "../../../../GraphQl/graphql";
import DropDown from "../../../../shared/components/ui/DropDown";
import { readAuthToken } from "../../../../shared/utils";
import TypeInput from "../../forms/upload/TypeInput";
import Item from "../overview/Item";

const AdminPanel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = readAuthToken("accessToken");
  const [img, setImg] = useState<any>();

  const groupChat = useGetChatQuery({
    variables: {
      entity: {
        id: id,
      },
    },
  });

  const [saveChat] = useSaveChatMutation();

  console.log(groupChat.data?.getChat?.participants, "chat part");
  const participants: any = groupChat?.data?.getChat?.participants;
  const uploadHandler = async (e: any) => {
    const file = e.target.files[0];
    const base64: string | any = await convertBase64(file);

    saveChat({
      variables: {
        entity: {
          id: id,
          avatar: {
            base64: base64.split(",")[1],
            mimeType: file.type,
            name: file.name,
          },
        },
      },
    }).finally(() => {
      groupChat.refetch();
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

  // const requestOptions: any = {
  //   method: "GET",
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //     responseType: "arraybuffer",
  //   },
  // };
  // const fetchImage = async () => {
  //   const res = await fetch(
  //     `${API_URL}media/${groupChat.data?.getChat?.avatar?.id}`,
  //     requestOptions
  //   );
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
  // };

  // useEffect(() => {
  //   if (`${API_URL}media/${groupChat.data?.getChat?.avatar?.id}`) {
  //     fetchImage();
  //   }
  // }, [`${API_URL}media/${groupChat.data?.getChat?.avatar?.id}`, token]);

  return (
    <div className="absolute left-0   md:relative pb-5  w-full  z-50 bg-white top-0   ">
      <div className="h-1/4 w-full bg-primary p-4">
        <div className="w-full flex justify-between">
          <div>
            {" "}
            <ChevronLeftIcon
              onClick={() => navigate(`/messenger/chat/${id}`)}
              className="w-7 text-white "
            />{" "}
          </div>
          <div>
            <DropDown
              position={"right"}
              className="float-right mt-auto"
              boxClassName="w-48 mt-3 py-2.5 px-1 flex flex-col items-center justify-center"
              name={<DotsVerticalIcon className="w-7 text-white" />}
              withArrow={false}
            >
              <p
                onClick={() => navigate(`/groupAddMember/${id}`)}
                className="cursor-pointer"
              >
                Teilnehmer hinzufügen
              </p>
              <p
                onClick={() => navigate(`/groupChatNameChange/${id}`)}
                className="cursor-pointer"
              >
                Gruppennamen ändern
              </p>
              <p
                onClick={() => navigate(`/groupChatRules/${id}`)}
                className="cursor-pointer"
              >
                Gruppeneinstellungen
              </p>
            </DropDown>
          </div>
        </div>
        <div className="relative rounded-full mx-auto w-28 h-28 flex items-center justify-center bg-white">
          {" "}
          {groupChat.data?.getChat?.avatar?.id ? (
            <img
              src={`data:${groupChat.data?.getChat?.avatar?.mimeType};base64,${groupChat?.data?.getChat?.avatar?.base64}`}
              className="w-full h-full rounded-full"
            />
          ) : (
            <UserGroupIcon className="w-16 text-primary" />
          )}
          <div
            className="w-8 h-8 absolute bg-white rounded-full right-0 bottom-1 flex items-center 
          justify-center border-2 border-gray-400"
          >
            <TypeInput hasClass={true} onChange={uploadHandler}>
              <PencilIcon className="w-5 text-gray-500" />
            </TypeInput>
          </div>
        </div>
      </div>
      <div className="px-7 my-2 text-gray-600">
        <p>{participants?.length} Teilnehmer</p>
      </div>
      <div className="w-full px-7">
        {participants?.map(
          (participant: ParticipantEntity | undefined | null) => {
            return (
              <Item
                key={participant?.id}
                imgUrl={
                  participant?.user?.profilePicture?.id &&
                  `data:${participant?.user?.profilePicture?.mimeType};base64,${participant?.user?.profilePicture?.base64}`
                }
                name={participant?.user?.fullname}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
