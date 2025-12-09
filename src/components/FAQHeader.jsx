import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBell, FaUser, FaWallet } from 'react-icons/fa'; // Assuming react-icons are available
import './FAQHeader.css';

const FAQHeader = () => {
    return (
        <header className="faq-header-container">
            {/* Row 1: Phone and Logo */}
            <div className="faq-top-bar">
                <div className="faq-contact">
                    <span className="phone-icon">📞</span> {/* Use icon if available or emoji */}
                    <span>+91 9826352321</span>
                </div>
                <div className="faq-logo">
                    AMRUTAM
                </div>
                <div className="faq-top-spacer"></div> {/* To balance the centered logo if needed, or flex grow */}
            </div>

            {/* Row 2: Navigation and Icons */}
            <div className="faq-nav-bar">
                <nav className="faq-nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/#find-doctors">Find Doctors</Link>
                    <Link to="/#lab-tests">Lab Tests</Link>
                    <Link to="/#shop">Shop</Link>
                    <Link to="/#forum">Forum</Link>
                    <Link to="/#about">About Us</Link>
                </nav>

                <div className="faq-user-actions">
                    <button className="icon-btn badge" data-count="2"><FaWallet /></button>
                    <button className="icon-btn badge" data-count="1"><FaShoppingCart /></button>
                    <button className="icon-btn"><FaBell /></button>
                    <button className="icon-btn"><FaUser /></button>
                </div>
            </div>
        </header>
    );
};

export default FAQHeader;
