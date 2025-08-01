import { useState } from 'react';
import './searchbar.css';

export default function Searchbar({ props }) {
    const { setProducts } = props
    const data = JSON.parse(localStorage.getItem('Data'))
    const products = data.products;

    const [search, setsearch] = useState('');

    const filteredProduct = products.filter(product => {
        if (!product.name) return false;
        return product.name.toLowerCase().includes(search.toLowerCase());
    });

    const handleSearchChange = (e) => {
        setsearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts(filteredProduct)
    };

    return (
        <div className='search'>
            <input
                type="text"
                className='search-bar'
                placeholder="Product Name..."
                value={search}
                onChange={handleSearchChange}
            />
            <button
                type="submit"
                className='search-btn'
                onClick={handleSubmit}
            >
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
}