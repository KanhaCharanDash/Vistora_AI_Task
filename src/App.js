import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { ProductList } from "./Components/Product/ProductList";
import { Cart } from "./Components/Card/Cart";
import { Wishlist } from "./Components/Wishlist";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Box>

     
      <Footer />
    </Box>
  );
};

export default App;
