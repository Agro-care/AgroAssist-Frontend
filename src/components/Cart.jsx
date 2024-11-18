import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../userContext';
import { baseURL } from '../lib';

const Cart = ({ removeFromCart }) => {
    const { user } = useContext(UserContext);
    const [detailedCartItems, setDetailedCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!user) return;

            try {
                const response = await fetch(`${baseURL}/api/users/${user}/cart`);
                if (response.ok) {
                    const data = await response.json();
                    setDetailedCartItems(data.cart);

                    const total = data.cart.reduce((sum, item) => sum + item.product_id.price * item.quantity, 0);
                    setTotalAmount(total.toFixed(2));
                } else {
                    console.error("Failed to fetch cart items");
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [user]);

    return (
        <div className="cart-container max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>
            {detailedCartItems.length > 0 ? (
                <>
                    {detailedCartItems.map((item) => (
                        <div
                            key={item._id}
                            className="cart-item flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.product_id.image}
                                    alt={item.product_id.name}
                                    className="cart-item-image w-20 h-20 rounded object-cover border"
                                />
                                <div className="cart-item-details">
                                    <h3 className="text-lg font-medium text-gray-800">{item.product_id.name}</h3>
                                    <p className="text-sm text-gray-600">{item.product_id.description}</p>
                                    <p className="text-sm text-gray-600">{`Category: ${item.product_id.category}`}</p>
                                    <p className="text-sm text-gray-700 font-semibold mt-2">{`Price: $${item.product_id.price}`}</p>
                                    <p className="text-sm text-gray-700 font-semibold">{`Quantity: ${item.quantity}`}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => removeFromCart(item.product_id._id)}
                                    className="remove-from-cart px-3 py-1.5 text-red-600 bg-red-100 rounded-lg hover:bg-red-200"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total p-4 bg-white rounded-lg shadow-md mt-6">
                        <h3 className="text-xl font-medium text-gray-800">Cart Summary</h3>
                        <div className="flex justify-between text-gray-700 mt-2">
                            <span>Total Items:</span>
                            <span>{detailedCartItems.length}</span>
                        </div>
                        <div className="flex justify-between text-gray-700 mt-1 font-semibold">
                            <span>Total Amount:</span>
                            <span>${totalAmount}</span>
                        </div>
                    </div>
                </>
            ) : (
                <p className="empty-cart-message text-gray-600 text-center mt-4">Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
