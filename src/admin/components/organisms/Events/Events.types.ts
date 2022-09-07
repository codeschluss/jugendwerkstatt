export interface AddressFormInputs {
  street: string;
  place: string;
  postalCode: string;
  houseNumber: string;
}
export interface BaseDataFormInputs {
  name: string;
  organizer: string;
  category: string;
}

export interface ScheduleProps {
  start_date?: Date | null;
  start_hour?: Date | null;
  end_date?: Date | null;
  end_hour?: Date | null;
  repeat?: 'week' | 'month' | 'year' | '';
  end_repeat?: Date | null;
}
export interface ScheduleInputs {
  startDate?: Date;
  endDate?: Date;
}

export interface EventsFormInputs {
  baseData: BaseDataFormInputs;
  address: AddressFormInputs;
  description: string;
  files: { file: File | null }[];
  schedule: ScheduleProps;
}
export interface OrganizerFormInputs {
  name: string;
  phone: string;
  mail: string;
  website?: string;
}
export interface CategoryFormInputs {
  name: string;
}
