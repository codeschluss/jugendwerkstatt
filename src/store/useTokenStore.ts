import { TokenDto } from "./../GraphQl/graphql";
import create from "zustand";

interface TokenTypes {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
}

export const useTokenStore = create<TokenTypes>((set) => ({
  accessToken: undefined,
  refreshToken: undefined,
  setAccessToken: (accessToken: string) => set(() => ({ accessToken })),
  setRefreshToken: (refreshToken: string) => set(() => ({ refreshToken })),
}));
