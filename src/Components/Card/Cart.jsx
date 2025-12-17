import React from "react";
import { Stack, Typography, Button, Chip } from "@mui/material";
import { CartItem } from "./CartItem";

export const Cart = ({ checkout = false }) => {
  return (
    <Stack alignItems="center" mb="5rem">
      <Stack width="50rem" mt="3rem" px={2} rowGap={4}>
        
        {/* Cart Items */}
        <Stack rowGap={2}>
          <CartItem />
          <CartItem />
        </Stack>

        {/* Subtotal Section */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          {checkout ? (
            <Stack rowGap={2} width="100%">
              <Stack direction="row" justifyContent="space-between">
                <Typography>Subtotal</Typography>
                <Typography>$120</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography>Shipping</Typography>
                <Typography>$10</Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography>Taxes</Typography>
                <Typography>$5</Typography>
              </Stack>

              <hr />

              <Stack direction="row" justifyContent="space-between">
                <Typography>Total</Typography>
                <Typography>$135</Typography>
              </Stack>
            </Stack>
          ) : (
            <>
              <Stack>
                <Typography variant="h6">Subtotal</Typography>
                <Typography>Total items in cart 2</Typography>
                <Typography color="text.secondary">
                  Shipping and taxes calculated at checkout.
                </Typography>
              </Stack>

              <Typography variant="h6">$120</Typography>
            </>
          )}
        </Stack>

        {/* Actions */}
        {!checkout && (
          <Stack rowGap="1rem">
            <Button variant="contained">Checkout</Button>
            <Chip
              label="or continue shopping"
              variant="outlined"
              sx={{ alignSelf: "center", cursor: "pointer" }}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
