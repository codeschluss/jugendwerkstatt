import React from "react";
import CustomHeader from "../../header/customHeader/CustomHeader";
import Items from "./Items";

const ProfileSettings = () => {
  return (
    <div className="  absolute bg-white w-full h-screen top-0 z-40 flex flex-col items-center justify-start">
      <CustomHeader>Profileinstellungen</CustomHeader>
      <div className="w-4/5">
        {" "}
        <Items text="Personal Data" link="/profile-personal" />
        <Items text="Benachrichtigungen" link="/#" />
        <Items text="Passwort ändern" link="/profile-password" />
        <Items text="FAQ" link="/#" />
        <Items text="Datenschutz" link="/#" />
      </div>
    </div>
  );
};

export default ProfileSettings;
