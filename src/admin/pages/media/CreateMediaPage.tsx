import { ReactElement } from "react";
import { Accordion } from "../../components/molecules";

const CreateMediaPage = (): ReactElement => {
  return (
    <div className="min-h-full">
      <Accordion title="Neues Video hinzufügen">
        <p>lorem ispum</p>
      </Accordion>
    </div>
  );
};

export default CreateMediaPage;
