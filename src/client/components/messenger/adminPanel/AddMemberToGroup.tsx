import {
  ChevronLeftIcon
} from "@heroicons/react/outline";
import { useNavigate, useParams } from "react-router-dom";
import {
  ConjunctionOperator,
  ParticipantEntity,
  QueryOperator,
  useAddParticipantToChatMutation,
  useGetChatQuery,
  useGetUsersQuery,
  UserEntity
} from "../../../../GraphQl/graphql";
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
        value: "supervisor",
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
      participants?.every(
        (el: UserEntity | undefined | null) => user?.id !== el?.id
      )
  );

  const [addMember] = useAddParticipantToChatMutation();

  const addParticipant = (userId: string | undefined | null) => {
    addMember({
      variables: {
        chatId: id,
        userId: userId,
      },
    }).then(() => groupChat.refetch());
  };

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
              addMember={() => addParticipant(user?.id)}
              imgUrl={
                user?.profilePicture?.id &&
                `data:${user?.profilePicture?.mimeType};base64,${user?.profilePicture?.base64}`
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
