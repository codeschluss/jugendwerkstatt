import { Props } from 'react-select';

export type OptionType = {
  id: string;
  label: string;
};

export interface MultiSelectProps extends Props {
  onGetValues?: (values: OptionType[]) => void;
}
