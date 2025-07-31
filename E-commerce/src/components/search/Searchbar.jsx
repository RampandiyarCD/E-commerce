import React, { useContext, useState } from 'react';
import './searchbar.css';
import ProductContext from '../../context/Productcontext';

export default function Searchbar() {
    const { allProducts, setProducts } = useContext(ProductContext);
    console.log(allProducts)
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts)
        console.log('Searching for:', filteredProducts);
    };

    return (
        <div className='search'>
            <input
                type="text"
                className='search-bar'
                placeholder="Product Name..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                type="submit"
                className='search-btn'
                onClick={handleSearch}
            >
                <i className="fa fa-search"></i>
            </button>

        </div>
    );
}