import create from "zustand";

// types
import { Nullable, UserModel } from "../../interfaces";
import { AuthStateTypes } from "./authenticated.types";

export const useAuthStore = create<AuthStateTypes>((set: any) => ({
  user: null,
  loading: true,
  isAuthenticated: false,
  addAuth: (
    user: Nullable<UserModel>,
    isAuthenticated: boolean,
    loading: boolean
  ) => {
    set(() => ({ user, isAuthenticated, loading }));
  },
  removeAuth: () =>
    set(() => ({ user: null, isAuthenticated: false, loading: false })),
}));
