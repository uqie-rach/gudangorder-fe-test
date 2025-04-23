import { create } from "zustand";

export enum UserVariant {
  CUSTOMER = "CUSTOMER",
  VENDOR = "VENDOR",
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: UserVariant;
}

interface UserStore {
  data: User;
}

export const useUserStore = create<UserStore>((set) => ({
  data: true,
}));
