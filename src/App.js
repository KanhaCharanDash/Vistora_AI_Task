import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "./Components/Product/ProductList";
import { Cart } from "./Components/Card/Cart";
import { Wishlist } from "./Components/Wishlist";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
};

export default App;
