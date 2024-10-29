import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`);
                if (!response.ok) {
                    throw new Error("Product not found");
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!product) return <p className="text-center text-gray-500">Product not found</p>;

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition transform hover:scale-105 duration-200">
                <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100">
                    <img src={product.image} alt={product.name} className="rounded-md max-w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-2xl text-green-500 font-semibold mb-2">{`$${product.price} ${product.currency}`}</p>
                        <p className="text-gray-700 mt-2 mb-6 text-sm">{product.description}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Farmer:</span> {product.farmer_id}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Location:</span> {product.location}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Stock:</span> {product.stock} {product.unit}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Harvest Date:</span> {new Date(product.harvest_date).toLocaleDateString()}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Shipping Cost:</span> ${product.shipping_cost}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Category:</span> {product.category}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Brand:</span> {product.brand}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Rating:</span> {product.rating} <span className="text-xs text-yellow-500">★</span> ({product.numReviews} reviews)</p>
                        
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {Object.entries(product.specifications || {}).map(([key, value]) => (
                                    <li key={key} className="text-sm text-gray-700 bg-gray-100 p-2 rounded-md">
                                        <span className="font-semibold">{key}:</span> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <button
                        className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-150 shadow-lg transform hover:-translate-y-1"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
