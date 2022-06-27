import { useNavigate } from "react-router-dom";
import {
  useGetUsersQuery,
  useSaveChatMutation,
} from "../../../../../GraphQl/graphql";
// import ContactOptions from "../../../modals/ContactOptions";
import Item from "../Item";

const Contacts = () => {
  const getUsers = useGetUsersQuery();
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
          name: `chat ${fullName}`,
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
