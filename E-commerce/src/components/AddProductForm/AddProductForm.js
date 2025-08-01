import React, { useState } from 'react';
import './AddProductForm.css'; 

const AddProductForm = () => {
  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
  const updatedProducts = [...existingProducts, product];

  localStorage.setItem('products', JSON.stringify(updatedProducts));

  window.alert('Add Product Successfully!');
  setProduct({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });
};

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Product Name:</label>
        <input 
          type="text" 
          name="name" 
          value={product.name} 
          onChange={handleChange} 
          required 
        />

        <label>Price:</label>
        <input 
          type="number" 
          name="price" 
          value={product.price} 
          onChange={handleChange} 
          required 
        />

        <label>Description:</label>
        <textarea 
          name="description" 
          value={product.description} 
          onChange={handleChange} 
          required 
        />

        <label>Category:</label>
        <input 
          type="text" 
          name="category" 
          value={product.category} 
          onChange={handleChange} 
        />

        <label>Image URL:</label>
        <input 
          type="text" 
          name="image" 
          value={product.image} 
          onChange={handleChange} 
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};


export default AddProductForm;

