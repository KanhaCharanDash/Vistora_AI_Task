import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      likedItems: [],

      toggleLike: (product) => {
        const items = get().likedItems;
        const exists = items.find((p) => p.id === product.id);

        if (exists) {
          set({
            likedItems: items.filter((p) => p.id !== product.id),
          });
        } else {
          set({
            likedItems: [...items, product],
          });
        }
      },

      removeLike: (productId) =>
        set((state) => ({
          likedItems: state.likedItems.filter(
            (p) => p.id !== productId
          ),
        })),

      clearWishlist: () => set({ likedItems: [] }),
    }),
    {
      name: "wishlist-storage", 
    }
  )
);
