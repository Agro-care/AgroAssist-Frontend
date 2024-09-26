import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <BrowserRouter>
        <div className='NavFrame'>
        <nav className='Navbar1'>
            
                <button className='NavTitle'>Crop Recommendation</button>
                <button className='NavTitle'>Fertilizer Recommedation</button>
                <button className='NavTitle'>Weather Analysis</button>
            
        </nav>
        </div>
        </BrowserRouter>
    );
};

export default Navbar;