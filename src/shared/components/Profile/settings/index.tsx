import Button from "../../../../client/components/ui/Button";
import useAuth from "../../../../hooks/useAuth";
import CustomHeader from "../../header/customHeader/CustomHeader";
import Items from "./Items";

const ProfileSettings = () => {

  const { logout } = useAuth();
  
  return (
    <div className="absolute md:static bg-white w-full h-screen top-0 z-40 flex flex-col items-center justify-between">
      <div className="w-full">
        <CustomHeader>Profileinstellungen</CustomHeader>
        <div className="w-4/5 m-auto">
          {" "}
          <Items text="Personal Data" link="/profile-personal" />
          <Items text="Benachrichtigungen" link="/#" />
          <Items text="Passwort ändern" link="/profile-password" />
          <Items text="FAQ" link="/#" />
          <Items text="Datenschutz" link="/#" />
        </div>
      </div>
      <div className="mb-8 flex h-20 flex-col w-3/5 justify-between">
        <Button isDisabled={true} isValidated={true} click={logout}>
          Logout
        </Button>
        <Button isDisabled={true} isValidated={true} click={() => alert("awd")}>
          Profil löschen
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
