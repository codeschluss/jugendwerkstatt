import { ReactElement } from 'react';
import { Button } from '../../atoms';
import { FormActionsProps } from './FormActions.types';

export const FormActions = ({ onSubmit }: FormActionsProps): ReactElement => {
  // eslint-disable-next-line no-restricted-globals
  const handleGoBack = () => history.back();

  return (
    <div className="flex flex-row justify-between mt-4 md:justify-start">
      <Button
        onClick={handleGoBack}
        className="md:mr-6 border-[#424242] text-[#424242]"
        type="button"
      >
        Zurück
      </Button>
      <Button className="md:mr-6" onClick={onSubmit}>
        Absenden
      </Button>
    </div>
  );
};
