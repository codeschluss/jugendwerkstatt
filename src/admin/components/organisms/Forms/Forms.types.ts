export interface FormsBaseDataInputs {
  name: string;
  category: string;
  user: string;
}

export interface FormsFormInputs {
  baseData: Pick<FormsBaseDataInputs, "name" | "category">;
  description: string;
}

export interface UserFormsFormInputs {
  baseData: FormsBaseDataInputs;
  description: string;
}
