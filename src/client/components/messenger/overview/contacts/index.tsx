import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../../config/app";
import {
  ConjunctionOperator,
  QueryOperator,
  RoleEntity,
  useGetUsersQuery,
  useMeRolesQuery,
  UserEntity,
  useSaveChatMutation
} from "../../../../../GraphQl/graphql";
import ContactOptions from "../../../modals/ContactOptions";
// import ContactOptions from "../../../modals/ContactOptions";
import Item from "../Item";

const Contacts = () => {
  const [contactName, setContactName] = useState<any>("");
  const [picId, setPicId] = useState<any>("");
  const [contactId, setContactId] = useState<any>("");
  const [contactPhone, setContactPhone] = useState<any>("");
  const [contactEmail, setContactEmail] = useState<any>("");

  const meRoles = useMeRolesQuery();

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
  ];

  meRoles.data?.me?.roles?.some(
    (el: RoleEntity | undefined | null) =>
      el?.key === "admin" || el?.key === "supervisor"
  ) &&
    adminOperands.push({
      entity: {
        operator: QueryOperator.Equal,
        path: "roles.key",
        value: "student",
      },
    });

  const getUsers = useGetUsersQuery({
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
  const [saveChat] = useSaveChatMutation();
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreateChat = (id: string | null | undefined) => {
    saveChat({
      variables: {
        entity: {
          participants: [
            {
              user: {
                id: id,
              },
            },
          ],
          admin: false,
        },
      },
    }).then((res) => {
      navigate(`/messenger/chat/${res.data?.saveChat?.id}`);
    });
  };
  return (
    <div className="px-8">
      <ContactOptions
        clicked={() => setModal(false)}
        visible={modal}
        guestName={contactName}
        guestNr={contactPhone}
        guestEmail={contactEmail}
        imgSrc={picId && `${API_URL}media/${picId}`}
        openChat={() => handleCreateChat(contactId)}
      />
      {getUsers.data?.getUsers?.result
        ?.filter((usr) => usr?.id !== meRoles?.data?.me?.id)
        .map((el: UserEntity | undefined | null) => (
          <Item
            key={el?.id}
            // onClick={() => handleCreateChat(el?.id)}
            // href={`/messenger/chat/${el?.id}`}
            onClick={() => {
              setContactName(el?.fullname);
              setPicId(el?.profilePicture?.id);
              setContactId(el?.id);
              setContactPhone(el?.phone);
              setContactEmail(el?.email);
              setModal(true);
            }}
            name={el?.fullname}
            imgUrl={
              el?.profilePicture?.id &&
              `data:${el?.profilePicture?.mimeType};base64,${el?.profilePicture?.base64}`
            }
          />
        ))}
    </div>
  );
};

export default Contacts;
