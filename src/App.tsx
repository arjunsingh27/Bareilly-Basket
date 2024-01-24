import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header.jsx';
import Footer from './components/shared/Footer/Footer.jsx';
import Home from './pages/Home';
import Products from './pages/ProductList';
import Login from './pages/Login';  
import Cart from './pages/Cart';
import Register from './pages/Register';
import OrderHistory from './pages/OrderHistory';
import OrderDetails from './pages/OrderDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/order" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
