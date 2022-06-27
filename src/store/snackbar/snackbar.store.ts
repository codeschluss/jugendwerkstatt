import create from "zustand";

// types
import { SnackbarInfo, SnackbarStoreTypes } from "./snackbar.types";

export const snackbarStore = create<SnackbarStoreTypes>((set) => ({
  info: null,
  handleOpen: (info: SnackbarInfo) => set({ info }),
  handleClose: () => set({ info: null }),
}));
