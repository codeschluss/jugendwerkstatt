import create from "zustand";

interface TempEmailProps {
  tempEmail: string;
  setTempEmail: any;
}

export const useTempEmailStore = create<TempEmailProps>((set: any) => ({
  tempEmail: "",

  setTempEmail: (tempEmail: string) => set({ tempEmail }),
}));
