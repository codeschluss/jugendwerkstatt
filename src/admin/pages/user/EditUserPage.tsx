import { ReactElement } from "react";
import { Accordion } from "../../components/molecules";

const EditUserPage = (): ReactElement => {
  return (
    <div className="min-h-full">
      <Accordion title="Max Müller Rolle zuweisen">
        <p>lorem ispum</p>
      </Accordion>
    </div>
  );
};

export default EditUserPage;
