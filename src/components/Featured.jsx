import React from 'react';
import './Featured.css';
import featuredLogos from '../assets/featured_logos.png';

const Featured = () => {
    return (
        <section className="featured-section">
            <h2 className="featured-title">Featured</h2>
            <p className="featured-subtitle">Recognized and celebrated by leading publications – Amrutam in the spotlight!</p>

            <div className="logo-container">
                <img src={featuredLogos} alt="Featured in Times of India, YourStory, Vogue, etc." className="featured-img" />
            </div>

            <div className="featured-divider"></div>
        </section>
    );
};

export default Featured;
