import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json';
import '../style.css';

const ProductList = ({ addToCart }) => (
    <div className="product-list">
        {products && products.length > 0 ? (
            products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
        ) : (
            <p>No products available</p>
        )}
    </div>
);

export default ProductList;