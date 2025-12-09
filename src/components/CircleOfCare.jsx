import React from 'react';
import './CircleOfCare.css';
import circleBg from '../assets/circle_bg_blob.png';
import circleFg from '../assets/circle_foreground.png';

const steps = [
    {
        step: "Step 1",
        title: "Get your referral code",
        description: "Contact us to receive your unique referral code."
    },
    {
        step: "Step 2",
        title: "Register on Amrutam",
        description: "Sign up on the Amrutam Doctors app or website to join our specialist network."
    },
    {
        step: "Step 3",
        title: "Complete KYC",
        description: "Fill in your details and upload the required documents for verification."
    },
    {
        step: "Step 4",
        title: "Start consulting",
        description: "Once verified, begin offering consultations and helping patients."
    }
];

const CircleOfCare = () => {
    return (
        <section className="circle-section">
            <div className="circle-header">
                <h2 className="circle-title">Join Our Circle of Care</h2>
                <p className="circle-subtitle">Becoming a part of Amrutam is simple</p>
            </div>

            <div className="circle-content-wrapper">
                <div className="steps-list">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <h3 className="step-heading"><span className="step-prefix">{step.step}: </span>{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="circle-visual">
                    <div className="visual-container">
                        <img src={circleBg} alt="" className="circle-bg-blob" />
                        <img src={circleFg} alt="Amrutam Doctor Onboarding" className="circle-img-main" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CircleOfCare;
