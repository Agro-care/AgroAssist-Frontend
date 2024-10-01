import React from 'react';
import "../style.css"

const Navbar = () => {
    return (
        <div className='NavFrame'>
        <nav className='Navbar1'>
            
                <button className='NavTitle'>Crop Recommendation</button>
                <button className='NavTitle'>Fertilizer Recommedation</button>
                <button className='NavTitle'>Weather Analysis</button>
            
        </nav>
        </div>
    );
};

export default Navbar;