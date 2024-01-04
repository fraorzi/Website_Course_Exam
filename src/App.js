// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import CourseDescription from './components/CourseDescription/CourseDescription';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import './App.scss';
import {CartProvider} from "./components/CartContext/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/course/:id" element={<CourseDetails />} />
                        <Route path="/description/:id" element={<CourseDescription />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
