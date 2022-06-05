import { ReactElement } from 'react';
import { useToggle } from '../../../../../hooks/useToggle';
import { twClsx } from '../../../../utils/twClsx';

export const Switch = (): ReactElement => {
  /**
   * hooks
   */
  const { isToggled, handleToggle } = useToggle(false);

  const handleSwitchToggle = () => {
    handleToggle();

    console.log(
      !isToggled
        ? 'Sending request... -> Enabled'
        : 'Sending request... -> Disabled'
    );
  };

  return (
    <div
      className="flex items-center w-12 h-6 p-1 border-2 border-[#3B8873] rounded-full cursor-pointer md:w-14 md:h-7"
      onClick={handleSwitchToggle}
    >
      <div
        className={twClsx(
          'bg-[#3B8873] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out',
          isToggled && 'transform translate-x-7'
        )}
      ></div>
    </div>
  );
};

export default Switch;
