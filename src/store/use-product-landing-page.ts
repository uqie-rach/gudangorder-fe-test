import { Product } from "@/lib/types";
import { create } from "zustand";

interface ProductLPStore {
  productLP: Product | null;
  setProductLP: (product: Product) => void;
}

export const useProductLandingPage = create<ProductLPStore>((set) => ({
  productLP: null,
  setProductLP: () => set((state) => ({ productLP: state.productLP })),
}));
