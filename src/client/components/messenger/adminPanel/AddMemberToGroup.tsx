import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  PencilIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../../config/app";
import {
  ConjunctionOperator,
  ParticipantEntity,
  QueryOperator,
  useGetChatQuery,
  useGetUsersQuery,
  UserEntity,
  useSaveChatMutation,
  useSaveUserMutation,
} from "../../../../GraphQl/graphql";
import DropDown from "../../../../shared/components/ui/DropDown";
import Item from "../overview/Item";

const AddMemberToGroup = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const groupChat = useGetChatQuery({
    variables: {
      entity: {
        id: id,
      },
    },
  });

  const adminOperands = [
    {
      entity: {
        operator: QueryOperator.Equal,
        path: "roles.key",
        value: "admin",
      },
    },
    {
      entity: {
        operator: QueryOperator.Equal,
        path: "roles.key",
        value: "superviser",
      },
    },
    {
      entity: {
        operator: QueryOperator.Equal,
        path: "roles.key",
        value: "student",
      },
    },
  ];
  const users = useGetUsersQuery({
    variables: {
      params: {
        expression: {
          conjunction: {
            operands: adminOperands,
            operator: ConjunctionOperator.Or,
          },
        },
      },
    },
  });
  const participants: any = groupChat?.data?.getChat?.participants?.map(
    (el: ParticipantEntity | undefined | null) => el?.user
  );
  const notGroupMemberUsers = users.data?.getUsers?.result?.filter(
    (user: UserEntity | undefined | null) =>
      participants.every(
        (el: UserEntity | undefined | null) => user?.id !== el?.id
      )
  );

  return (
    <div className="absolute left-0  md:relative pb-5  w-full  z-50 bg-white top-0      ">
      <div className="h-20 w-full bg-primary p-4 relative flex ">
        <div className=" absolute  top-[35%] ">
          <ChevronLeftIcon
            onClick={() => navigate(-1)}
            className="w-7 text-white "
          />{" "}
        </div>
        <div className="  mx-auto w-full text-2xl text-white  flex items-center justify-center">
          <p>Teilnehmer hinzufügen</p>
        </div>
      </div>

      <div className="w-full px-7 mt-10">
        {notGroupMemberUsers?.map((user: UserEntity | undefined | null) => {
          return (
            <Item
              key={user?.id}
              imgUrl={
                user?.profilePicture?.id &&
                `${API_URL}media/${user?.profilePicture?.id}`
              }
              name={user?.fullname}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddMemberToGroup;
