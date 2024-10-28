// src/App.js
import React, { useContext, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './style.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Signup from './components/signup';
import Fertilizer from './components/Fertilizer';
import Crop from './components/CropRecommendation';
import Weather from './Weather';
import { UserContext, UserProvider } from './userContext';
import { Login } from "./components/login";
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';

function App() {
  const { user } = useContext(UserContext);

  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      console.log("Cart Items after adding:", updatedItems);
      return updatedItems;
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      {/* Pass cartItems to Navbar */}
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Product Routes */}
        <Route path='/products' element={<ProductList addToCart={addToCart} />} />
        <Route path='/product/:id' element={<ProductPage addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />

        {/* Protected routes */}
        {user && (
          <>
            <Route path='/fertilizer' element={<Fertilizer />} />
            <Route path='/crop' element={<Crop />} />
            <Route path='/WeatherAlerts' element={<Weather />} />
          </>
        )}

        {/* Redirect to login if the user is not logged in */}
        {!user && (
          <>
            <Route path='/weatherAlerts' element={<Login />} />
            <Route path='/fertilizer' element={<Login />} />
            <Route path='/crop' element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
