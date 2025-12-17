import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFilterStore = create(
  persist(
    (set) => ({
      selectedBrands: [],
      selectedCategories: [],

      toggleBrand: (brand) =>
        set((state) => ({
          selectedBrands: state.selectedBrands.includes(brand)
            ? state.selectedBrands.filter((b) => b !== brand)
            : [...state.selectedBrands, brand],
        })),

      toggleCategory: (category) =>
        set((state) => ({
          selectedCategories: state.selectedCategories.includes(category)
            ? state.selectedCategories.filter((c) => c !== category)
            : [...state.selectedCategories, category],
        })),

      clearFilters: () =>
        set({
          selectedBrands: [],
          selectedCategories: [],
        }),
    }),
    {
      name: "product-filters", // localStorage key
    }
  )
);
