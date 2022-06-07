export interface AddressFormInputs {
  street: string;
  city: string;
  postalCode: string;
  houseNumber: string;
}
export interface BaseDataFormInputs {
  eventName: string;
  phone: string;
  email: string;
  website?: string;
  organizator: string;
  category: string;
}

export interface EventsFormInputs {
  baseData: BaseDataFormInputs;
  address: AddressFormInputs;
  description: string;
}
