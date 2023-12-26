// ShoppingCart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.scss';
import { useCart } from '../CartContext/CartContext'; // Upewnij się, że ścieżka do CartContext jest poprawna

const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateCartItem, calculateTotal } = useCart();

    const updateQuantity = (id, newQuantity) => {
        updateCartItem(id, newQuantity);
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
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="total">
                        <span>Total:</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <Link to="/checkout">Proceed to Checkout</Link>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
