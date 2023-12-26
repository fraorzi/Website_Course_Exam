// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import CourseDescription from './components/CourseDescription/CourseDescription';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
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
                        <Route path="/course/:id" element={<CourseDetails />} />
                        <Route path="/description/:id" element={<CourseDescription />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
