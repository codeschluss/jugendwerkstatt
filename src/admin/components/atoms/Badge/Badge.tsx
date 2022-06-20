import { XIcon } from '@heroicons/react/solid';
import { FC, ReactElement } from 'react';
import { ButtonVariantsEnum } from '../../../interfaces/enums/ButtonVariants.enum';
import { Button } from '../Form/Button/Button';
import { BadgeProps } from './Badge.props';

export const Badge: FC<BadgeProps> = ({ onRemove, children }): ReactElement => {
  return (
    <div className="flex items-center justify-between px-2 gap-x-5 bg-[#DFDFDF] rounded-md w-fit">
      {children}
      <Button
        variant={ButtonVariantsEnum.LINK}
        iconOnly
        className="p-0"
        onClick={onRemove}
        iconRight={<XIcon className="text-primary" />}
      />
    </div>
  );
};
