import create from "zustand";

interface AuthTypes {
  isLogedIn: boolean;
  passwordBits: number | undefined;
  bgColor: string | undefined;
  tempEmail: string | undefined;
  setIsLogedIn: (isLogedIn: boolean) => void;
  setPasswordBits: (passwordBits: number) => void;
  setBgColor: (bgColor: string) => void;
  setTempEmail: (tempEmail: string) => void;
}

export const useAuthStore = create<AuthTypes>((set) => ({
  isLogedIn: false,
  passwordBits: undefined,
  bgColor: undefined,
  tempEmail: undefined,
  setIsLogedIn: (isLogedIn: boolean) => set(() => ({ isLogedIn })),
  setPasswordBits: (passwordBits: number) => set(() => ({ passwordBits })),
  setBgColor: (bgColor: string) => set(() => ({ bgColor })),
  setTempEmail: (tempEmail: string) => set(() => ({ tempEmail })),
}));
