import React from 'react';
import '../style.css';

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Welcome to Agro Care</h1>
                <p>We are excited to have you here.</p>
                <a href="#signup" className="signup-button">Sign up Now</a>
            </div>
        </section>
    );
}

export default HeroSection;