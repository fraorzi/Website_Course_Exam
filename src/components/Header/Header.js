import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.scss';
import { useCart } from '../CartContext/CartContext';
import { FaUser } from 'react-icons/fa';

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
            navigate('/auth');
        }
    };

    function checkLoginStatus() {
        const token = localStorage.getItem('userToken');
        const savedUsername = localStorage.getItem('username');
        if (token && savedUsername) {
            setUsername(savedUsername);
            return true;
        }
        return false;
    }

    function logout() {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <header className="header">
            <div className="logo">
                <h1><Link to="/" className="logo-link">My Matura Website</Link></h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <ScrollLink to="coursesSection" spy={true} smooth={true} duration={500}>
                        Przewiń do kursów
                        </ScrollLink>
                    </li>

                </ul>
            </nav>
            <div className="user-options">
                <Link to="/cart" className="cart-icon">
                    🛒 {cartCount}
                </Link>
                {isLoggedIn ? (
                    <>
                        <FaUser /> <span>{username}</span>
                        <button onClick={handleLoginLogout}>Log Out</button>
                    </>
                ) : (
                    <>
                        <button onClick={handleLoginLogout}>Log In / Register</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
