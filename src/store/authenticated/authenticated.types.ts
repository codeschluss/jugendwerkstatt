import { Nullable, UserModel } from "../../interfaces";

export interface AuthStateTypes {
  user: Nullable<UserModel>;
  isAuthenticated: boolean;
  loading: boolean;
  addAuth: (
    user: Nullable<UserModel>,
    isAuthenticated: boolean,
    loading: boolean
  ) => void;
  removeAuth: () => void;
}
