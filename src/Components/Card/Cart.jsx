import React, { useState } from "react";
import { Stack, Typography, Button, Chip, Snackbar, Alert } from "@mui/material";
import { CartItem } from "./CartItem";
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { useCartStore } from "../../store/useCartStore";
import { Link } from "react-router-dom";

export const Cart = ({ checkout = false }) => {
  const { cartItems, clearCart } = useCartStore();
  const [open, setOpen] = useState(false);


  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const SHIPPING = subtotal > 0 ? 10 : 0;
  const TAX = subtotal * 0.05;
  const TOTAL = subtotal + SHIPPING + TAX;

  
  const handleCheckout = () => {
    clearCart();     
    setOpen(true);  
  };

  return (
    <>
      <Navbar />

      <Stack alignItems="center" mb="5rem">
        <Stack width="50rem" mt="3rem" px={2} rowGap={4}>
          
          <Stack rowGap={2}>
            {cartItems.length === 0 ? (
              <Typography>Your cart is empty</Typography>
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))
            )}
          </Stack>

         
          {cartItems.length > 0 && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack>
                <Typography variant="h6">Subtotal</Typography>
                <Typography>Total items in cart {totalItems}</Typography>
                <Typography color="text.secondary">
                  Shipping and taxes calculated at checkout.
                </Typography>
              </Stack>

              <Typography variant="h6">
                ${subtotal.toFixed(2)}
              </Typography>
            </Stack>
          )}

        
          {!checkout && cartItems.length > 0 && (
            <Stack rowGap="1rem">
              <Button variant="contained" onClick={handleCheckout}>
                Checkout
              </Button>

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

 

  
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          🎉 Checkout successful! Your order has been placed.
        </Alert>
      </Snackbar>
       
    </>
  );
};
