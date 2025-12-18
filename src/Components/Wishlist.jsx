import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { useWishlistStore } from "../store/useWishlistStore";
import { ProductCard } from "./Product/ProductCard ";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const Wishlist = () => {
  const { likedItems } = useWishlistStore();

  return (
    <>
      <Navbar />

      <Stack p={3}>
        <Typography variant="h4" mb={3}>
          My Wishlist
        </Typography>

        {likedItems.length === 0 ? (
          <Typography>No liked items yet ❤️</Typography>
        ) : (
          <Grid container spacing={3}>
            {likedItems.map((product) => (
              <Grid item key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>

    </>
  );
};
