import React from 'react';
import '../style.css';

const Cart = ({ cartItems, removeFromCart }) => {
    console.log("Cart Items in Cart Component:", cartItems); // Debugging: Check if cartItems is passed correctly

    // Calculate total amount of all items in the cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-price">{`Price: $${item.price}`}</p>
                                <button className="remove-from-cart" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total Items: {cartItems.length}</h3>
                        <h3>Total Amount: ${calculateTotalAmount()}</h3>
                    </div>
                </>
            ) : (
                <p className="empty-cart-message">Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;