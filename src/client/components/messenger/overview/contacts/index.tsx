import React, { useState } from "react";
import ContactOptions from "../../../modals/ContactOptions";
import Item from "../Item";

const Contacts = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div>
      <ContactOptions
        clicked={() => setModal(false)}
        visible={modal}
        guestName="Jane Cooper"
        guestNr="(406) 555-0120"
        guestEmail="info@alphaev.de"
      />
      <Item
        clicked={() => setModal(true)}
        href=""
        name="Jane Cooper"
        imgUrl="/assets/avatarSmall2.png"
      />
    </div>
  );
};

export default Contacts;
