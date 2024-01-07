// AppContent.js
import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Footer from './components/Footer/Footer';

const AppContent = () => {
    const location = useLocation();

    return (
        <div className="app">
            {location.pathname !== '/auth' && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                {/* ... other routes ... */}
            </Routes>
            {location.pathname !== '/auth' && <Footer />}
        </div>
    );
};

export default AppContent;
