import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/ProductList";
import Login from "./components/auth/Login";
import Cart from "./components/cart/Cart";
import Register from "./components/auth/Register";
import OrderHistory from "./components/order/OrderHistory";
import OrderDetails from "./components/order/OrderDetails";
import ProductDetail from "./components/productlist/ProductDetail";
import CheckOut from "./components/cart/CheckOut";
import { useStateValue } from "./StateProvider"; // Import your state provider
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Declare stripePromise outside of the component
const promise = loadStripe("pk_test_51Oac52SElcdkcjvWeNAwbczbaOp8a9P0Z5Q1a2fNNBIMe4rJmv5faEnUxTSQ5jnFIcnp7g4XkJKTrMNtZu3NBizB00S56gtLsd");

const App = () => {
  const [{}, dispatch] = useStateValue(); // Destructure the state value from your state provider

  useEffect(() => {
    const user = sessionStorage.getItem("currentUser"); // Access user data from sessionStorage
    if (user) {
      dispatch({
        type: "SET_CURRENT_USER",
        user: JSON.parse(user),
      });
    }
  }, [dispatch]); // Add dispatch to the dependency array

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* Place the Route inside Routes and outside any JSX */}
          <Route
            path="/checkout"
            element={
              <Elements stripe={promise}>
                <CheckOut />
              </Elements>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
