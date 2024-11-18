import React, { useContext, useState, useEffect } from 'react';
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
import AdminDashboard from "./components/admin/AdminDashboard";
import DiseaseIdentification from './components/DiseaseIdentification';
import RentalEquipment from './components/Equipment';
import { baseURL } from './lib';

function App() {
  const {user} = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  
  console.log(user)

  useEffect(() => {
    if (user) {

      const fetchCartItems = async () => {
        try {
          const response = await fetch(`${baseURL}/api/users/${user}/cart`);
          if (response.ok) {
            const data = await response.json();
            setCartItems(data.cart);
          } else {
            console.error("Failed to fetch cart items");
          }
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      };

      const fetchWishlistItems = async () => {
        try {
          const response = await fetch(`${baseURL}/api/users/${user}/wishlist`);
          if (response.ok) {
            const data = await response.json();
            setWishlistItems(data.wishlist);
          } else {
            console.error("Failed to fetch wishlist items");
          }
        } catch (error) {
          console.error("Error fetching wishlist items:", error);
        }
      };

      fetchCartItems();
      fetchWishlistItems();
    }
  }, [user]);

  const addToCart = async (product) => {
    try {
      const response = await fetch(`${baseURL}/api/users/${user}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product._id, quantity: 1 })
      });
      if (response.ok) {
        const data = await response.json();
        setCartItems(data.cart);
      } else {
        console.error("Failed to add to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      console.log(productId)
      const response = await fetch(`${baseURL}/api/users/${user}/cart/${productId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setCartItems(data.cart);
        window.location.reload()
      } else {
        console.error("Failed to remove from cart");
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const response = await fetch(`${baseURL}/api/users/${user}/wishlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: product._id })
      });
      if (response.ok) {
        const data = await response.json();
        setWishlistItems(data.wishlist);
      } else {
        console.error("Failed to add to wishlist");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await fetch(`${baseURL}/api/users/${user}/wishlist/${productId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        const data = await response.json();
        setWishlistItems(data.wishlist);
      } else {
        console.error("Failed to remove from wishlist");
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} wishlistItems={wishlistItems} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<ProductList addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path='/product/:id' element={<ProductPage addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/equipment' element={<RentalEquipment />} />
        {user ? (
          <>
            <Route path='/fertilizer' element={<Fertilizer />} />
            <Route path='/crop' element={<Crop />} />
            <Route path='/WeatherAlerts' element={<Weather />} />
            <Route path='/DiseaseIdentification' element={<DiseaseIdentification />} />
          </>
        ) : (
          <>
            <Route path='/weatherAlerts' element={<Login />} />
            <Route path='/fertilizer' element={<Login />} />
            <Route path='/crop' element={<Login />} />
            <Route path='/DiseaseIdentification' element={<Login />} />
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
