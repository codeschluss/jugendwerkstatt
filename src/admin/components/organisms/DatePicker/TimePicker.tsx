import { ClockIcon } from '@heroicons/react/outline';
import { FC, ReactElement } from 'react';
import ReactDatePicker from 'react-datepicker';
import { InputField } from '../../molecules';
import { DatePickerProps } from './DatePicker.props';

export const TimePicker: FC<DatePickerProps> = ({
  label,
  ...rest
}): ReactElement => (
  <ReactDatePicker
    customInput={
      <InputField
        id="timePicker"
        label={label}
        iconRight={<ClockIcon />}
        inputClassName="items-end border rounded-sm border-gray-400"
      />
    }
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    timeCaption="Time"
    dateFormat="h:mm aa"
    className="w-24"
    {...rest}
  />
);
