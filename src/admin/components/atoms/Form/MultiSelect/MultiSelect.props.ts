import { Props } from 'react-select';

export type OptionType = {
  label: string;
  value: string;
};

export interface MultiSelectProps extends Props {
  onGetValues?: (values: OptionType[]) => void;
}
