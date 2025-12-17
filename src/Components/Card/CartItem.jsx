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

export const CartItem = () => {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Image & Details */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack width="120px" height="120px">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Stack>

          <Stack>
            <Typography variant="h6">Sample Product</Typography>
            <Typography color="text.secondary">Brand Name</Typography>

            <Typography mt={1}>Quantity</Typography>
            <Stack direction="row" alignItems="center">
              <IconButton>
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography>1</Typography>
              <IconButton>
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        {/* Price & Remove */}
        <Stack alignItems="flex-end" rowGap="1rem">
          <Typography>$60</Typography>
          <Button variant="contained" size="small">
            Remove
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};
