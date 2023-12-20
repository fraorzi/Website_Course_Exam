// ShoppingCart.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.scss';

const ShoppingCart = () => {
    // Założenie, że masz stan koszyka w komponencie nadrzędnym
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 20, quantity: 2 },
        { id: 2, name: 'Product 2', price: 30, quantity: 1 },
        // Dodaj inne produkty według potrzeb
    ]);

    const updateQuantity = (id, newQuantity) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                    <Link to="/checkout">Proceed to Checkout</Link>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
