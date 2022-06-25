import Button from "../../../../client/components/ui/Button";
import { useAuth } from "../../../../hooks/useAuthV2";
import CustomHeader from "../../header/customHeader/CustomHeader";
import DeleteConfirmation from "./Confirmation";
import Items from "./Items";

const ProfileSettings = () => {
  const { handleLogout } = useAuth();

  return (
    <div className="absolute top-0 z-40 flex flex-col items-center justify-between w-full h-full bg-white md:static md:w-2/5">
      <div className="w-full">
        <CustomHeader>Profileinstellungen</CustomHeader>
        <div className="w-4/5 m-auto">
          {" "}
          <Items text="Personal Data" link="/profile-personal" />
          {/* <Items text="Benachrichtigungen" link="/#" /> */}
          <Items text="Passwort ändern" link="/profile-password" />
          {/* <Items text="FAQ" link="/#" />
          <Items text="Datenschutz" link="/#" /> */}
        </div>
      </div>
      <div className="flex flex-col justify-between w-3/5 h-20 mb-8">
        <Button isDisabled={true} isValidated={true} click={handleLogout}>
          Logout
        </Button>
        <DeleteConfirmation />
      </div>
    </div>
  );
};

export default ProfileSettings;
