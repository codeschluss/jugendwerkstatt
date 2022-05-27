import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import CustomHeader from "../../header/customHeader/CustomHeader";
import Button from "../../ui/Button";
import Items from "./Items";

const ProfileSettings = () => {
  const { setIsLogedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setIsLogedIn(false);
    navigate("/");
  };

  return (
    <div className="  absolute bg-white w-full h-screen top-0 z-40 flex flex-col items-center justify-between">
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
        <Button isDisabled={true} isValidated={true} click={logoutHandler}>
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
