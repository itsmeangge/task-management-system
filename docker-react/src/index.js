import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './ProductList';
import ProductView from './ProductView';
import ProductForm from './ProductForm';
import ProductEdit from './ProductEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {}
        <Route path="/product-list" element={<ProductList />} />
        
        {}
        <Route path="/product/:productId" element={<ProductView />} />
        
        {}
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/edit-product/:productId" element={<ProductEdit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);