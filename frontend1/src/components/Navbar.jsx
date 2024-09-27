import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "../style.css";

const Navbar = () => {
    return (
        <BrowserRouter>
        <div className='NavFrame'>
        <nav className='Navbar1'>
        <div className='NavMainTitle'>Agro care</div>
            
                <div className='NavTitle'>Crop Recommendation</div>
                <div className='NavTitle'>Fertilizer Recommedation</div>
                <div className='NavTitle'>Weather Analysis</div>
            
        </nav>
        </div>
        </BrowserRouter>
    );
};

export default Navbar;