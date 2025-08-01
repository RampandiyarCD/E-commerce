import { useState } from 'react';
import './filter.css'
const products = [
  { type: "electronics", name: "Smartphone" },
  { type: "electronics", name: "Laptop" },
  { type: "electronics", name: "Wireless Earbuds" },
  { type: "home gadgets", name: "Smart Thermostat" },
  { type: "home gadgets", name: "Robot Vacuum" },
  { type: "home gadgets", name: "Air Purifier" }
];

const Filter = () => {
    const [filter, setFilter] = useState("all");
    const filteredProducts = products.filter(product => {
    const matchesCategory = filter === "all" || product.type === filter;
    return matchesCategory;
  });
  console.log(filteredProducts);
  return (
     <div className="Dall">
      <h2>Product Filter</h2>
      <div  className="Dcat" >
        <label className="label"></label>
        <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>none</option>
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="home gadgets">Home Gadgets</option>
        </select>
      </div>
      
      <div>
        <h3>Results ({filteredProducts.length})</h3>
        <ul>
          {filteredProducts.map((product, index) => (
            <li className="list" key={index}> {product.name} </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default Filter

