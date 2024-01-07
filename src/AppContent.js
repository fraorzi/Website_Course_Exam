// AppContent.js
import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Footer from './components/Footer/Footer';
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseDescription from "./components/CourseDescription/CourseDescription";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";

const AppContent = () => {
    const location = useLocation();

    return (
        <div className="app">
            {location.pathname !== '/auth' && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/course/:courseId" element={<CourseDetails />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            {location.pathname !== '/auth' && <Footer />}
        </div>
    );
};

export default AppContent;
