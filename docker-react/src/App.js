import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './ProductList';
import ProductView from './ProductView';
import ProductForm from './ProductForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Route for displaying all products */}
        <Route path="/product-list" element={<ProductList />} />
        
        {/* Route for viewing a single product by ID (e.g., /product/5) */}
        <Route path="/product/:productId" element={<ProductView />} />
        
        {/* Route for the form to add a new product */}
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);