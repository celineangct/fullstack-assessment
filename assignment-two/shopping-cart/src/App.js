import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
