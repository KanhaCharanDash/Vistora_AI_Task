import React from "react";
import { Stack, Typography, Button, Chip } from "@mui/material";
import { CartItem } from "./CartItem";
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { useCartStore } from "../../store/useCartStore";
import { Link } from "react-router-dom";
export const Cart = ({ checkout = false }) => {
  const { cartItems } = useCartStore();

  // 🔢 Dynamic calculations
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const SHIPPING = subtotal > 0 ? 10 : 0;
  const TAX = subtotal * 0.05; // 5% tax
  const TOTAL = subtotal + SHIPPING + TAX;

  return (
    <>
      <Navbar />

      <Stack alignItems="center" mb="5rem">
        <Stack width="50rem" mt="3rem" px={2} rowGap={4}>
          {/* Cart Items */}
          <Stack rowGap={2}>
            {cartItems.length === 0 ? (
              <Typography>Your cart is empty</Typography>
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))
            )}
          </Stack>

          {/* Subtotal Section */}
          {cartItems.length > 0 && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {checkout ? (
                <Stack rowGap={2} width="100%">
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Subtotal</Typography>
                    <Typography>${subtotal.toFixed(2)}</Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Shipping</Typography>
                    <Typography>${SHIPPING.toFixed(2)}</Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Taxes</Typography>
                    <Typography>${TAX.toFixed(2)}</Typography>
                  </Stack>

                  <hr />

                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography fontWeight={600}>
                      ${TOTAL.toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>
              ) : (
                <>
                  <Stack>
                    <Typography variant="h6">Subtotal</Typography>
                    <Typography>
                      Total items in cart {totalItems}
                    </Typography>
                    <Typography color="text.secondary">
                      Shipping and taxes calculated at checkout.
                    </Typography>
                  </Stack>

                  <Typography variant="h6">
                    ${subtotal.toFixed(2)}
                  </Typography>
                </>
              )}
            </Stack>
          )}

          {/* Actions */}
          {!checkout && cartItems.length > 0 && (
            <Stack rowGap="1rem">
              <Button variant="contained">Checkout</Button>
       <Chip
  component={Link}
  to="/"
  label="or continue shopping"
  variant="outlined"
  sx={{ alignSelf: "center", cursor: "pointer" }}
/>


            </Stack>
          )}
        </Stack>
      </Stack>

      <Footer />
    </>
  );
};
