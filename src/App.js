// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent'; // Make sure to import the new component
import './App.scss';
import {CartProvider} from "./components/CartContext/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <AppContent />
            </Router>
        </CartProvider>
    );
};

export default App;
