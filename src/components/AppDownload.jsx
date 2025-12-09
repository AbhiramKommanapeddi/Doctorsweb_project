import React from 'react';
import './AppDownload.css';
import appPhone from '../assets/app_phone_mockup.png';
import engagementCard from '../assets/app_engagement_card.png';
import downloadsCard from '../assets/app_downloads_card.png';
import storeButtons from '../assets/store_buttons.png';
import { FaFilePrescription, FaHeartbeat, FaComments, FaBell } from 'react-icons/fa';

const AppDownload = () => {
    return (
        <section className="app-download-section">
            <div className="app-download-container">
                <div className="app-download-content">
                    <h2 className="app-download-title">
                        Download Amrutam Ayurveda<br />
                        App Now
                    </h2>
                    <p className="app-download-subtitle">
                        The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
                    </p>

                    <div className="app-features-grid">
                        <div className="feature-pill">
                            <div className="feature-icon-circle"><FaFilePrescription /></div>
                            <span>Access To Prescriptions</span>
                        </div>
                        <div className="feature-pill">
                            <div className="feature-icon-circle"><FaHeartbeat /></div>
                            <span>Track Health Efficiently</span>
                        </div>
                        <div className="feature-pill">
                            <div className="feature-icon-circle"><FaComments /></div>
                            <span>Direct Chat With Doctors</span>
                        </div>
                        <div className="feature-pill">
                            <div className="feature-icon-circle"><FaBell /></div>
                            <span>In-App Reminders For Consultations</span>
                        </div>
                    </div>

                    <div className="app-store-buttons">
                        <img src={storeButtons} alt="Download on Google Play and App Store" />
                    </div>
                </div>

                <div className="app-download-visual">
                    <div className="visual-circle-bg"></div>
                    <img src={appPhone} alt="Amrutam App Interface" className="phone-mockup" />

                    {/* Top Arrow (pointing to phone) */}
                    <svg className="arrow-svg arrow-top-left" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 50 Q 30 10 90 40" stroke="#3A643B" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#3A643B" />
                            </marker>
                        </defs>
                    </svg>

                    <img src={engagementCard} alt="Engagement Time" className="floating-card engagement-card" />

                    {/* Bottom Arrow (pointing to card) */}
                    <svg className="arrow-svg arrow-bottom-right" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10 Q 50 80 90 60" stroke="#3A643B" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                    </svg>

                    <img src={downloadsCard} alt="10K+ Downloads" className="floating-card downloads-card" />
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
