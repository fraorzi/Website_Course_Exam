import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useCart } from '../CartContext/CartContext';
import { FaUser } from 'react-icons/fa'

const Header = () => {
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const cartCount = cartItems.length;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const loggedIn = checkLoginStatus();
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLoginLogout = () => {
        if (isLoggedIn) {
            logout();
        } else {
            navigate('/login');
        }
    };

    function checkLoginStatus() {
        const token = localStorage.getItem('userToken');
        const savedUsername = localStorage.getItem('username');  // Przykład, jak możesz przechowywać nazwę użytkownika
        if (token && savedUsername) {
            setUsername(savedUsername);
            return true;
        }
        return false;
    }

    function logout() {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        navigate('/'); // Programowe przekierowanie do strony głównej
    }

    return (
        <header className="header">
            <div className="logo">
                <h1><Link to="/" className="logo-link">My Matura Website</Link></h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/" exact className="active">Home</NavLink></li>
                    <li><NavLink to="/checkout" className="active">Checkout</NavLink></li>
                </ul>
            </nav>
            <div className="user-options">
                <Link to="/cart" className="cart-icon">
                    🛒 {cartCount}
                </Link>
                {isLoggedIn ? (
                    <>
                        <FaUser /> <span>{username}</span>  // Wyświetl ikonę i nazwę użytkownika
                        <button onClick={handleLoginLogout}>Log Out</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleLoginLogout}>Log In</button>
                        <button onClick={() => navigate('/register')} style={{ marginLeft: "10px" }}>Register</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
