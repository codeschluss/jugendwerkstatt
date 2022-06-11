import { ReactElement } from "react";
import { Button } from "../../atoms";
import { FormActionsProps } from "./FormActions.types";

export const FormActions = ({
  onSubmit,
  onReset,
}: FormActionsProps): ReactElement => {
  return (
    <div className="flex md:justify-start justify-between flex-row mt-4">
      <Button
        onClick={onReset}
        className="md:mr-6 border-[#424242] text-[#424242]"
        type="button"
      >
        Zurücksetzen
      </Button>
      <Button className="md:mr-6" onClick={onSubmit}>
        Absenden
      </Button>
    </div>
  );
};
