import { FC, ReactElement } from 'react';
import { useToggle } from '../../../../../hooks/useToggle';
import { twClsx } from '../../../../utils/twClsx';
import { SwitchProps } from './Switch.props';

export const Switch: FC<SwitchProps> = ({
  enabled = false,
  onSwitch,
}): ReactElement => {
  /**
   * hooks
   */
  const { isToggled, handleToggle } = useToggle(enabled);

  const handleSwitchToggle = () => {
    handleToggle();
    onSwitch(!isToggled);
  };

  return (
    <div
      role="button"
      className={twClsx("flex items-center w-12 h-6 p-1 border-2 border-primary rounded-full cursor-pointer md:w-14 md:h-7", isToggled && 'border-[#3B8873]')}
      onClick={handleSwitchToggle}
    >
      <div
        className={twClsx(
          'bg-primary w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out',
          isToggled && 'transform translate-x-7 bg-[#3B8873]'
        )}
      />
    </div>
  );
};

export default Switch;
