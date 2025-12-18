import React from "react";
import {
  Stack,
  Grid,
  Typography,
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
import { useFilterStore } from "../../store/useFilterStore";
import  Navbar  from "../Navbar.jsx"; 
export const ProductList = () => {
  const {
    selectedBrands,
    selectedCategories,
   
    toggleCategory,
    clearFilters,
  } = useFilterStore();

  const filteredProducts = products.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return brandMatch && categoryMatch;
  });

  return (
    <>
    <Navbar/>
      <Stack direction="row" alignItems="flex-start">
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
          <Typography variant="h4">Filters</Typography>

          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={clearFilters}
          >
            <ClearIcon />
          </IconButton>


          <Accordion sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {["beauty", "fragrances", "groceries", "furniture"].map(
                  (category) => (
                    <FormControlLabel
                      key={category}
                      control={
                        <Checkbox
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                      }
                      label={category}
                    />
                  )
                )}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Stack>

        <Stack flex={1} p={3}>
          <Grid container spacing={3} justifyContent="center">
            {filteredProducts.map((product) => (
              <Grid item key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          <Stack alignItems="center" mt={3}>
            <Pagination count={5} />
            <Typography>
              Showing {filteredProducts.length} products
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Footer />
    </>
  );
};
