import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero_image.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <span className="hero-subtitle">Namaste, Welcome to Amrutam</span>
                <h1 className="hero-title">
                    Join Amrutam <br />
                    <span>Grow Your Practice</span>
                </h1>
                <p className="hero-description">
                    Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
                </p>

                <div className="hero-actions">
                    <button className="btn-primary">Join Now</button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Average Active Events</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">40+</span>
                        <span className="stat-label">Average Daily Free Calls</span>
                    </div>
                </div>
            </div>

            <div className="hero-image-container">
                {/* User provided image */}
                <img src={heroImage} alt="Amrutam Doctors" className="hero-img" />
                {/* Floating icons are likely part of the image now, but if not, we can re-enable them. 
            For now, assuming the user image is complete as per their screenshot. */}
            </div>
        </section>
    );
};

export default Hero;
