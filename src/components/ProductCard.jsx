import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const ProductCard = ({ product, addToCart }) => {
    if (!product) return null;

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{`Price: $${product.price}`}</p>
            </Link>
            <button className="add-to-cart" onClick={() => {
                console.log("Add to Cart clicked for:", product); // Debugging: Check button click
                addToCart(product);
            }}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;