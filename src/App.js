// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import CourseDescription from './components/CourseDescription/CourseDescription';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Checkout from './pages/Checkout/Checkout';
import './App.scss';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/course/:id" component={CourseDetails} />
                    <Route path="/description/:id" component={CourseDescription} />
                    <Route path="/cart" component={ShoppingCart} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
