import { CalendarIcon } from '@heroicons/react/outline';
import { FC, ReactElement } from 'react';
import ReactDatePicker from 'react-datepicker';
import { InputField } from '../../molecules';
import { DatePickerProps } from './DatePicker.props';

export const DatePicker: FC<DatePickerProps> = ({
  label,
  ...rest
}): ReactElement => (
  <ReactDatePicker
    customInput={
      <InputField
        id="datePicker"
        label={label}
        iconRight={<CalendarIcon />}
        inputClassName="border rounded-sm border-gray-400"
      />
    }
    {...rest}
  />
);
