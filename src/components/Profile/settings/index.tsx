import React from "react";
import Items from "./Items";

const ProfileSettings = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        {" "}
        <Items text="Personal Data" link="/profile-personal" />
        <Items text="Benachrichtigungen" link="/#" />
        <Items text="Passwort ändern" link="/#" />
        <Items text="FAQ" link="/#" />
        <Items text="Datenschutz" link="/#" />
      </div>
    </div>
  );
};

export default ProfileSettings;
