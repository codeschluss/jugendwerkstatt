import { ReactElement } from 'react';
import { Button } from '../../atoms';

export const BackButton = (): ReactElement => {
  // eslint-disable-next-line no-restricted-globals
  const handleGoBack = () => history.back();

  return (
    <Button
      onClick={handleGoBack}
      className="md:mr-6 border-[#424242] text-[#424242]"
      type="button"
    >
      Zurücksetzen
    </Button>
  );
};
