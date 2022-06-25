import create from 'zustand';

// types
import { SnackbarInfo, SnackbarStoreTypes } from './snackbar.types';

export const snackbarStore = create<SnackbarStoreTypes>((set) => ({
  open: false,
  info: null,
  handleOpen: (info: SnackbarInfo) => set({ open: true, info }),
  handleClose: () => set({ open: false, info: null }),
}));
