// Checkout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.scss';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dodaj logikę przetwarzania zamówienia, np. wysłanie danych na serwer
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="personal-info">
                    <h3>Personal Information</h3>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                </div>
                <div className="shipping-address">
                    <h3>Shipping Address</h3>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">ZIP Code:</label>
                        <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                    </div>
                </div>
                {/* Dodaj inne sekcje zamówienia, np. podsumowanie, płatność itp. */}
                <button type="submit">Place Order</button>
            </form>
            <Link to="/cart">Back to Cart</Link>
        </div>
    );
};

export default Checkout;
