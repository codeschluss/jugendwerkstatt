import { FC, ReactElement } from 'react';
import ReactDatePicker from 'react-datepicker';
import { InputField } from '..';
import { DatePickerProps } from './DatePicker.props';

export const DatePicker: FC<DatePickerProps> = ({
  label,
  iconRight,
  ...rest
}): ReactElement => (
  <ReactDatePicker
    customInput={
      <InputField
        id="datePicker"
        label={label}
        iconRight={iconRight}
        inputClassName="items-center border rounded-sm border-gray-400"
      />
    }
    className="max-w-sm"
    {...rest}
  />
);
