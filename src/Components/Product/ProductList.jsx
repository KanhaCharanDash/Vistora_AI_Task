import React from "react";
import {
  Stack,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Pagination,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { ProductCard } from "./ProductCard .jsx";
import { Footer } from "../Footer.jsx";
import products from "../../constant.js";
export const ProductList = () => {

  return (
    <>
      {/* Page Layout */}
      <Stack direction="row" alignItems="flex-start">
        
        {/* Sidebar */}
        <Stack
          sx={{
            width: "300px",
            padding: "1rem",
            backgroundColor: "white",
            borderRight: "1px solid #eee",
            position: "sticky",
            top: "4rem",
            maxHeight: "calc(100vh - 4rem)",
            overflowY: "auto",
          }}
        >
          <Typography variant="h4">New Arrivals</Typography>

          <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
            <ClearIcon />
          </IconButton>

          <Stack mt={4} rowGap={1}>
            <Typography variant="body2">Totes</Typography>
            <Typography variant="body2">Backpacks</Typography>
            <Typography variant="body2">Travel Bags</Typography>
            <Typography variant="body2">Hip Bags</Typography>
            <Typography variant="body2">Laptop Sleeves</Typography>
          </Stack>

          {/* Brand Filter */}
          <Accordion sx={{ mt: 3 }}>
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography>Brands</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Nike" />
                <FormControlLabel control={<Checkbox />} label="Adidas" />
                <FormControlLabel control={<Checkbox />} label="Puma" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          {/* Category Filter */}
          <Accordion sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Shoes" />
                <FormControlLabel control={<Checkbox />} label="Bags" />
                <FormControlLabel control={<Checkbox />} label="Accessories" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Stack>

        {/* Main Content */}
        <Stack flex={1} p={3} rowGap={4}>
          {/* Sort Dropdown */}
          <Stack direction="row" justifyContent="flex-end">
            <FormControl variant="standard" sx={{ width: "200px" }}>
              <InputLabel>Sort</InputLabel>
              <Select value="">
                <MenuItem value="">Reset</MenuItem>
                <MenuItem value="low">Price: Low to High</MenuItem>
                <MenuItem value="high">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {/* Product Grid */}
          <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>

          {/* Pagination */}
          <Stack alignItems="center" spacing={2}>
            <Pagination count={5} variant="outlined" shape="rounded" />
            <Typography>Showing 1 to 12 of 60 results</Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Footer (NO OVERLAP) */}
      <Footer />
    </>
  );
};
