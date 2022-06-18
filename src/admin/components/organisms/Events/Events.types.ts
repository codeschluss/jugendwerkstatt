export interface AddressFormInputs {
  street: string;
  place: string;
  postalCode: string;
  houseNumber: string;
}
export interface BaseDataFormInputs {
  name: string;
  phone?: string;
  email?: string;
  website?: string;
  organizer: string;
  category: string;
}

export interface EventsFormInputs {
  baseData: BaseDataFormInputs;
  address: AddressFormInputs;
  description: string;
  files: { file: FileList }[];
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
