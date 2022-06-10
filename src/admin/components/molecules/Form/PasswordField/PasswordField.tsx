import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { FC, forwardRef, ReactElement, useState } from 'react';
import { useToggle } from '../../../../../hooks/useToggle';
import { ButtonVariantsEnum } from '../../../../interfaces/enums/ButtonVariants.enum';
import { Button } from '../../../atoms/Form/Button/Button';
import { Input } from '../../../atoms/Form/Input/Input';
import { Label } from '../../../atoms/Form/Label/Label';
import { InputFieldProps } from '../InputField/InputField.props';
import { PasswordFieldProps } from './PasswordField.props';

export const PasswordField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, name, label, labelProps, ...rest }, ref): ReactElement => {
    const {
      isToggled: isPasswordToggled,
      handleToggle: handlePasswordToggler,
    } = useToggle(true);

    return (
      <div className="input-field">
        <Label {...labelProps} htmlFor={id || name}>
          {label}
        </Label>
        <Input
          {...rest}
          {...(isPasswordToggled && { type: 'password' })}
          id={id}
          name={name || id}
          iconRight={
            <Button
              iconOnly
              variant={ButtonVariantsEnum.LINK}
              iconRight={isPasswordToggled ? <EyeIcon /> : <EyeOffIcon />}
              className="my-0 text-black"
              onClick={handlePasswordToggler}
            />
          }
          className="text-2xl"
          ref={ref}
        />
      </div>
    );
  }
);
