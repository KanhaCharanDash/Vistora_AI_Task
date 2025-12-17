import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      // ✅ Add item to cart
      addToCart: (product) => {
        const items = get().cartItems;
        const existing = items.find(
          (item) => item.product.id === product.id
        );

        if (existing) {
          set({
            cartItems: items.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cartItems: [...items, { product, quantity: 1 }],
          });
        }
      },

      // ➕ Increase quantity
      increaseQty: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      // ➖ Decrease quantity
      decreaseQty: (productId) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((item) =>
              item.product.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      // ❌ Remove item completely
      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.product.id !== productId
          ),
        })),

      // 🧹 Clear cart
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
