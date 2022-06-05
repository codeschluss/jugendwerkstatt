import { ReactElement } from "react";
import { Accordion } from "../../components/molecules";

const CreateFormsPage = (): ReactElement => {
  return (
    <div className="min-h-full">
      <Accordion title="Stammdaten">
        <p>lorem ispum</p>
      </Accordion>
      <Accordion title="Beschreibung">
        <p>lorem ispum</p>
      </Accordion>
    </div>
  );
};

export default CreateFormsPage;
