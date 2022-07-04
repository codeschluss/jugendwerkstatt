import create from 'zustand';

// types
import { SidebarStoreTypes } from './sidebar.types';

export const sidebarStore = create<SidebarStoreTypes>((set) => ({
  isToggled: true,
  handleToggle: () =>
    set((state) => ({
      isToggled: !state.isToggled,
    })),
  setToggled: (value: boolean) => set({ isToggled: value }),
}));
