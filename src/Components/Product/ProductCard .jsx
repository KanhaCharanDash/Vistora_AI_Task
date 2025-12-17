import React from "react";
import {
  Paper,
  Stack,
  Typography,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export const ProductCard = ({ product }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "280px",
        padding: "1rem",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <Stack>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "contain",
          }}
        />
      </Stack>

      {/* Content */}
      <Stack spacing={2} mt={2}>
        {/* Title & Wishlist */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={400}>
            {product.title}
          </Typography>

          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </Stack>

        <Typography color="text.secondary">
          {product.brand}
        </Typography>

        {/* Price & Button */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={500}>
            ${product.price}
          </Typography>

          <button
            style={{
              padding: "8px 14px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Add To Cart
          </button>
        </Stack>

        {/* Stock Info */}
        {product.stock <= 20 && (
          <FormHelperText error>
            Only few items left
          </FormHelperText>
        )}
      </Stack>
    </Paper>
  );
};
