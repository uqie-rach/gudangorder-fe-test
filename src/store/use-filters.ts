import { create } from "zustand";

interface FilterState {
  search: string;
  category: string;
  priceRange: [number, number];
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
  setPriceRange: (priceRange: [number, number]) => void;
  clearFilters: () => void;
}

// create a Zustand store for filters and save it in the browser's local storage
export const useFilters = create<FilterState>()(
  (set) => ({
    search: "",
    category: "all",
    priceRange: [0, 0],
    setSearch: (search) => set({ search }),
    setCategory: (category) => set({ category }),
    setPriceRange: (priceRange) => set({ priceRange }),
    clearFilters() {
      set({
        search: "",
        category: "all",
        priceRange: [0, 0],
      });
    },
  })
);
