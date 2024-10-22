import React, { useContext } from 'react';
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

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
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
};

export default function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
