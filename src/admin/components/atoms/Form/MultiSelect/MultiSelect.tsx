import { FC, ReactElement } from 'react';
import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';
import { MultiSelectProps, OptionType } from './MultiSelect.props';

const animatedComponents = makeAnimated();

export const MultiSelect: FC<MultiSelectProps> = ({
  onGetValues,
  ...props
}): ReactElement => {
  const handleOnChange = (
    newValue: unknown,
    _actionMeta: ActionMeta<unknown>
  ) => {
    if (onGetValues) onGetValues(newValue as OptionType[]);
  };

  return (
    <Select
      isMulti
      onChange={handleOnChange}
      components={animatedComponents}
      {...props}
    />
  );
};
