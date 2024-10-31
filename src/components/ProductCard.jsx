import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
    if (!product) return null;

    return (
        <div className="product-card max-w-xs bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl shadow-lg overflow-hidden m-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Link to={`/product/${product._id}`} className="product-link block relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-56 object-cover transition-opacity duration-200 hover:opacity-90"
                />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    {product.category}
                </span>
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    New
                </span>
                <div className="p-4">
                    <h3 className="product-name font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                    <p className="product-price text-indigo-600 font-semibold text-lg mb-1">{`$${product.price}`}</p>
                    <p className="product-brand text-sm text-gray-600 mb-1">{`Brand: ${product.brand}`}</p>
                    <p className="product-location text-sm text-gray-500">{`Location: ${product.location}`}</p>
                </div>
            </Link>
            <button
                className="add-to-cart w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-b-xl hover:from-blue-600 hover:to-indigo-600 transition duration-300"
                onClick={() => {
                    console.log("Add to Cart clicked for:", product);
                    addToCart(product);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
