import React, { useState } from 'react';
import Header from './components/header/Header';
import ProductContext from './context/Productcontext';
import { initialProducts } from './utils/data';

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ allProducts: initialProducts, products, setProducts }}>
      <Header />
    </ProductContext.Provider>
  );
}
