import React from "react";
import {
  Stack,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCartStore } from "../../store/useCartStore";

export const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCartStore();

  const { product, quantity } = item;

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack width="120px" height="120px">
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Stack>

          <Stack>
            <Typography variant="h6">{product.title}</Typography>
            <Typography color="text.secondary">
              {product.brand}
            </Typography>

            <Typography mt={1}>Quantity</Typography>
            <Stack direction="row" alignItems="center">
              <IconButton
                onClick={() => decreaseQty(product.id)}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Typography>{quantity}</Typography>

              <IconButton
                onClick={() => increaseQty(product.id)}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Stack alignItems="flex-end" rowGap="1rem">
          <Typography>
            ${product.price * quantity}
          </Typography>

          <Button
            variant="contained"
            size="small"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};
