import create from "zustand";

// types
export interface ExpireTokenStoreTypes {
  shouldRefresh: boolean;
}

export const expireTokenStore = create<ExpireTokenStoreTypes>(() => ({
  shouldRefresh: false,
}));
