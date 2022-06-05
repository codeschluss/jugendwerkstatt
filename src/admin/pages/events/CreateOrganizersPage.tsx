import { ReactElement } from "react";
import { Accordion } from "../../components/molecules";

const CreateOrganizersPage = (): ReactElement => {
  return (
    <div className="min-h-full">
      <Accordion title="Stammdaten">
        <p>lorem ispum</p>
      </Accordion>
      <Accordion title="Adresse">
        <p>lorem ispum</p>
      </Accordion>
    </div>
  );
};

export default CreateOrganizersPage;
