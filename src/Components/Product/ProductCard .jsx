import React from "react";
import {
  Paper,
  Stack,
  Typography,
  Checkbox,
  FormHelperText,
  IconButton,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartStore } from "../../store/useCartStore";
import { useWishlistStore } from "../../store/useWishlistStore";

export const ProductCard = ({ product }) => {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCartStore();

  // ✅ READ likedItems also
  const { likedItems, toggleLike } = useWishlistStore();

  // 🔍 Check cart quantity
  const cartItem = cartItems.find(
    (item) => item.product.id === product.id
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  // 🔍 Check if product is liked
  const isLiked = likedItems.some(
    (item) => item.id === product.id
  );

  return (
    <Paper elevation={1} sx={{ width: "280px", p: "1rem" }}>
      {/* Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "contain",
        }}
      />

      <Stack spacing={2} mt={2}>
        {/* Title & Wishlist */}
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" fontWeight={400}>
            {product.title}
          </Typography>

          {/* ✅ CONTROLLED CHECKBOX */}
          <Checkbox
            checked={isLiked}
            onChange={() => toggleLike(product)}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </Stack>

        <Typography color="text.secondary">
          {product.brand}
        </Typography>

        {/* Price + Cart Controls */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={500}>
            ${product.price}
          </Typography>

          {quantity === 0 ? (
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
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                size="small"
                onClick={() => decreaseQty(product.id)}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Typography>{quantity}</Typography>

              <IconButton
                size="small"
                onClick={() => increaseQty(product.id)}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>
          )}
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
