export interface FormsBaseDataInputs {
  name: string;
  category: string;
}

export interface FormsFormInputs {
  baseData: FormsBaseDataInputs;
  description: string;
}
