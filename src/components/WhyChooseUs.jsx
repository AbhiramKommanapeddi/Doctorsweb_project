import React from 'react';
import './WhyChooseUs.css';
import featureCall from '../assets/feature_call.png';
import featureForum from '../assets/feature_forum.png';
import featureModes from '../assets/feature_modes.png';
import featureWallet from '../assets/feature_wallet.png';
import featureTiming from '../assets/feature_timing.png';

const features = [
    {
        title: "Instant FREE 5-Mins Call",
        description: "Build trust with your patients instantly via a free 5-minute call. Connect effortlessly and showcase your expertise.",
        image: featureCall,
        alt: "Instant Call Interface"
    },
    {
        title: "Forum for Meaningful Connections",
        description: "Engage with patients and answer questions in the Amrutam Forum. Share your knowledge and build your reputation.",
        image: featureForum,
        alt: "Amrutam Forum Interface"
    },
    {
        title: "Choose Your Session Mode",
        description: "Video, Audio, or Chat – flexible options for your practice. Cater to patient preferences with ease.",
        image: featureModes,
        alt: "Session Modes Selection"
    },
    {
        title: "Smart Wallet",
        description: "Track your earnings and manage withdrawals seamlessly. Secure and transparent financial management.",
        image: featureWallet,
        alt: "Smart Wallet Interface"
    },
    {
        title: "Flexible Work Timing",
        description: "Set your own availability. Work when you want and balance your professional and personal life.",
        image: featureTiming,
        alt: "Availability Toggle Interface"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="section-header">
                <h2 className="section-title">Why Doctors Choose Us?</h2>
                <p className="section-subtitle">Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
            </div>

            <div className="features-list">
                {features.map((feature, index) => (
                    <div key={index} className={`feature-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="feature-text">
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                        <div className="feature-visual">
                            <img src={feature.image} alt={feature.alt} className="feature-img-item" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
