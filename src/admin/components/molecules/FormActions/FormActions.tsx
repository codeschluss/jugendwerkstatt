import { ReactElement } from 'react';
import { Button } from '../../atoms';
import { BackButton } from '../BackButton/BackButton';
import { FormActionsProps } from './FormActions.types';

export const FormActions = ({ onSubmit }: FormActionsProps): ReactElement => (
  <div className="flex flex-row justify-between mt-4 md:justify-start">
    <BackButton />
    <Button className="md:mr-6" onClick={onSubmit}>
      Absenden
    </Button>
  </div>
);
