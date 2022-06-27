import { ReactElement } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

export interface DatePickerProps extends ReactDatePickerProps {
  label: string;
  iconRight?: ReactElement;
}
