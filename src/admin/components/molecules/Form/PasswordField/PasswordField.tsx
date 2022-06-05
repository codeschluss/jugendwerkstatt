import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { FC, ReactElement, useState } from 'react';
import { ButtonVariantsEnum } from '../../../../interfaces/enums/ButtonVariants.enum';
import { Button } from '../../../atoms/Form/Button/Button';
import { Input } from '../../../atoms/Form/Input/Input';
import { Label } from '../../../atoms/Form/Label/Label';
import { Icon } from '../../../atoms/Icons/Icon';
import { PasswordFieldProps } from './PasswordField.props';

export const PasswordField: FC<PasswordFieldProps> = ({
  label,
  labelProps,
  inputRef,
  ...rest
}): ReactElement => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handlePasswordVisibility = () => setIsPasswordHidden(!isPasswordHidden);

  return (
    <div className="input-field">
      <Label {...labelProps}>{label}</Label>
      <Input
        {...(isPasswordHidden && { type: 'password' })}
        iconRight={
          <Button
            iconOnly
            variant={ButtonVariantsEnum.LINK}
            iconRight={isPasswordHidden ? <EyeIcon /> : <EyeOffIcon />}
            className="my-0 text-black"
            onClick={handlePasswordVisibility}
          />
        }
        className="text-2xl"
        {...rest}
        ref={inputRef}
      />
    </div>
  );
};
