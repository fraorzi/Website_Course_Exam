import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1><Link to="/" className="logo-link">My Matura Website</Link></h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/checkout" activeClassName="active">Checkout</NavLink></li>
                </ul>
            </nav>
            <div className="user-options">
                <Link to="/cart" className="cart-icon">
                    🛒 {/* Dynamicznie aktualizuj liczbę produktów */}
                </Link>
                {/* Tutaj można dodać opcje logowania/wylogowania */}
            </div>
        </header>
    );
};

export default Header;
