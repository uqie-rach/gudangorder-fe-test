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
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  billingAddress: {
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}

interface UserStore {
  data: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@gmail.com",
  phone: "1234567890",
  shippingAddress: {
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  billingAddress: {
    address: "456 Elm St",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
  },
}

export const useUserStore = create<UserStore>((set) => ({
  data: null,
  isAuthenticated: false,
  login: () => set({ data: mockUser, isAuthenticated: true }),
  logout: () => set({ data: null, isAuthenticated: false }),
}));
