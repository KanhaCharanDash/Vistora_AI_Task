import React, { useState } from "react";
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
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // 🔹 Handle brand filter
  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // 🔹 Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // 🔹 Apply filters
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

          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => {
              setSelectedBrands([]);
              setSelectedCategories([]);
            }}
          >
            <ClearIcon />
          </IconButton>

          {/* Brand Filter */}
          <Accordion sx={{ mt: 3 }}>
            <AccordionSummary expandIcon={<AddIcon />}>
              <Typography>Brands</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {["Essence", "Nike", "Adidas", "Puma"].map((brand) => (
                  <FormControlLabel
                    key={brand}
                    control={
                      <Checkbox
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                    }
                    label={brand}
                  />
                ))}
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
                {["beauty", "vegetables", "groceries", "accessories"].map(
                  (category) => (
                    <FormControlLabel
                      key={category}
                      control={
                        <Checkbox
                          checked={selectedCategories.includes(category)}
                          onChange={() =>
                            handleCategoryChange(category)
                          }
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

        {/* Main Content */}
        <Stack flex={1} p={3} rowGap={4}>
          {/* Product Grid */}
          <Grid container spacing={3} justifyContent="center">
            {filteredProducts.map((product) => (
              <Grid item key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          {/* Pagination (UI only) */}
          <Stack alignItems="center" spacing={2}>
            <Pagination count={5} variant="outlined" shape="rounded" />
            <Typography>
              Showing {filteredProducts.length} results
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Footer />
    </>
  );
};
