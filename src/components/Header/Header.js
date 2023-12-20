// Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <h1>My Matura Website</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" activeClassName="active">Shopping Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/checkout" activeClassName="active">Checkout</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="user-options">
                <Link to="/cart" className="cart-icon">
                    🛒
                    {/* Dodaj licznik produktów w koszyku, jeśli to jest zaimplementowane */}
                </Link>
                {/* Dodaj inne opcje użytkownika, logowanie, wylogowanie, itp. */}
            </div>
        </header>
    );
};

export default Header;
