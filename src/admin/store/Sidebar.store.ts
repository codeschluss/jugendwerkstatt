import create from 'zustand';

interface SidebarStoreProps {
  isSidebarToggled: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarStoreProps>((set) => ({
  isSidebarToggled: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarToggled: !state.isSidebarToggled })),
}));
