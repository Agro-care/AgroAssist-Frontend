// src/components/Navbar.js
import React, { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";

const Navbar = ({ cartItems }) => {
  const { user, Logout } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    Logout(); // Clear user data from context
    navigate('/login'); // Redirect to login page after logout
  };

  const cartItemCount = cartItems.length; // Calculate the number of items in the cart

  return (
    <div className="">
      <div className="flex content-center bg-customGreen pb-auto">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-16">
          <h3 className="text-md text-white font-bold opacity-[.70]">Agro Assist</h3>
        </div>
        <div className="flex-2 w-12/12 mx-auto">
          <ul className="flex m-6 items-around items-center">
            <li
              onClick={() => navigate("/")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 lg:ml-7 ml-6 mr-1.5"
            >
              Home
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/weatherAlerts")}
            >
              Weather Alerts
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Fertilizer Recommendation
            </li>
            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Disease Prediction
            </li>
            <li
              onClick={() => navigate("/products")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Ecommerce Store
            </li>
            <li
              onClick={() => navigate("/RentalPage")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Rent Here
            </li>
            <li
              onClick={() => navigate("/cart")}
              className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
            >
              Cart {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}
            </li>
            {!user ? (
              <>
                <li
                    onClick={() => navigate("/login")}
                    className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
                  >
                    Login
                </li>
              </>
            ) : (
              <>
                <p className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5">
                  Welcome, {user}!
                </p>
                <li
                    onClick={handleLogout}
                    className="text-sm cursor-pointer font-semibold text-white hover:opacity-90 ml-6 mr-1.5"
                  >
                    Logout
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
