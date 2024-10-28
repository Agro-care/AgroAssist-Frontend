import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import '../style.css';

const ProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div className="product-page">
            <div className="product-page-container">
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} className="product-page-image" />
                </div>
                <div className="product-details-section">
                    <h1 className="product-page-name">{product.name}</h1>
                    <p className="product-page-price">{`Price: $${product.price}`}</p>
                    <p className="product-page-description">{product.description}</p>
                    <p className="product-page-farmer">{`Farmer: ${product.farmerDetails}`}</p>
                    <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;