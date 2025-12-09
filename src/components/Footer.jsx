import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Column 1: Brand & Contact */}
                <div className="footer-column brand-column">
                    <h3 className="section-title">Get in touch</h3>
                    <p className="contact-email">support@amrutam.global</p>
                    <p className="contact-address">
                        Amrutam Pharmaceuticals Pvt Ltd.,<br />
                        chitragupt ganj, Nai Sadak, Lashkar,<br />
                        Gwalior - 474001
                    </p>
                    <p className="contact-phone">+91 9713171999</p>
                    <div className="social-icons">
                        <a href="#" className="social-link"><FaFacebookF /></a>
                        <a href="#" className="social-link"><FaInstagram /></a>
                        <a href="#" className="social-link"><FaYoutube /></a>
                        <a href="#" className="social-link"><FaTwitter /></a>
                        <a href="#" className="social-link"><FaLinkedinIn /></a>
                        <a href="#" className="social-link"><FaPinterestP /></a>
                    </div>
                </div>

                {/* Column 2: Information */}
                <div className="footer-column info-column">
                    <h3 className="section-title">Information</h3>
                    <ul className="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#terms">Terms and Conditions</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#app-privacy">Privacy Policy for Mobile Apps</a></li>
                        <li><a href="#shipping">Shipping, return and cancellation Policy</a></li>
                        <li><a href="#international">International Delivery</a></li>
                        <li><a href="#business">For Businesses, Hotels, and Resorts</a></li>
                    </ul>
                </div>

                {/* Column 3: Subscribe */}
                <div className="footer-column subscribe-column">
                    <h3 className="subscribe-title">Subscribe to our Newsletter and join Amrutam Family today!</h3>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Your Email Address" className="subscribe-input" />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
