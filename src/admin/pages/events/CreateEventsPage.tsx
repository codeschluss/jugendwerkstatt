import { ReactElement } from "react";
import { Accordion } from "../../components/molecules";
import { AddressForm } from "../../components/organisms";

const CreateEventsPage = (): ReactElement => {
  return (
    <div className="min-h-full">
      <Accordion title="Stammdaten">
        <p>lorem ispum</p>
      </Accordion>
      <Accordion title="Adresse">
        <AddressForm />
      </Accordion>
      <Accordion title="Beschreibung">
        <p>lorem ispum</p>
      </Accordion>
      <Accordion title="Bilder">
        <p>lorem ispum</p>
      </Accordion>
      <Accordion title="Termine">
        <p>lorem ispum</p>
      </Accordion>
    </div>
  );
};

export default CreateEventsPage;
