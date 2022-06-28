import { useNavigate } from "react-router-dom";
import {
  ConjunctionOperator,
  QueryOperator,
  useGetUsersQuery,
  useSaveChatMutation,
} from "../../../../../GraphQl/graphql";
// import ContactOptions from "../../../modals/ContactOptions";
import Item from "../Item";

const Contacts = () => {
  const getUsers = useGetUsersQuery({
    variables: {
      params: {
        expression: {
          conjunction: {
            operands: [
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
            ],
            operator: ConjunctionOperator.Or,
          },
        },
      },
    },
  });
  const [saveChat] = useSaveChatMutation();
  // const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCreateChat = (id: string | null | undefined, fullName: any) => {
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
    <div>
      {/* <ContactOptions
        clicked={() => setModal(false)}
        visible={modal}
        guestName="Jane Cooper"
        guestNr="(406) 555-0120"
        guestEmail="info@alphaev.de"
      /> */}
      {getUsers.data?.getUsers?.result?.map((el) => (
        <Item
          key={el?.id}
          onClick={() => handleCreateChat(el?.id, el?.fullname)}
          // href={`/messenger/chat/${el?.id}`}
          name={el?.fullname}
          imgUrl="/assets/avatarSmall2.png"
        />
      ))}
    </div>
  );
};

export default Contacts;
