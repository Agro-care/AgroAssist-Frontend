import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../style.css';
import { baseURL } from '../lib';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]); // State for products data
    const [loading, setLoading] = useState(true); // State for loading status

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${baseURL}/api/products`); // Replace with your API URL
                const data = await response.json();
                setProducts(data); // Set fetched products data
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // End loading state
            }
        };

        fetchProducts();
    }, []); // Only run once on component mount

    return (
        <div className="product-list">
            {loading ? (
                <p>Loading products...</p>
            ) : products.length > 0 ? (
                products.map((product) => (
                
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductList;
