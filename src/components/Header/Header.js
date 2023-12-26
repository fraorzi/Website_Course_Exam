import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { useCart } from '../CartContext/CartContext'; // Załóżmy, że CartContext jest w tym samym folderze

const Header = () => {
    const { cartItems } = useCart();
    const cartCount = cartItems.length;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = checkLoginStatus();
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            logout();
        } else {
            login();
        }
    };

    function checkLoginStatus() {
        const token = localStorage.getItem('userToken');
        return Boolean(token);
    }

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('userToken', data.token);
                    setIsLoggedIn(true);
                    window.location.href = '/';
                } else {
                    alert('Logowanie nieudane: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Błąd podczas logowania:', error);
            });
    }

    function logout() {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        window.location.href = '/login';
    }

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
                    🛒 {cartCount}
                </Link>
                <button onClick={handleLoginLogout}>
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>
            </div>
        </header>
    );
};

export default Header;
