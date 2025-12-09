import React, { useState } from 'react';
import './FAQPage.css';
import FAQHeader from '../components/FAQHeader';
import AppDownload from '../components/AppDownload';
import { FaSearch } from 'react-icons/fa';

const faqs = {
    Consultation: [
        { question: "What types of consultations are available?", answer: "We provide three types of consultations – video, instant call and chat consultation." },
        { question: "Can I get refund for the wallet money?", answer: "Refund policies depend on the specific terms of service. Generally, wallet balances are non-refundable but can be used for future services." },
        { question: "What is the Amrutam Forum?", answer: "The Amrutam Forum is a community space where you can discuss health topics, share experiences, and connect with others." },
        { question: "Can I pause the audio consultation?", answer: "Yes, in most cases you can pause or reschedule consultations depending on the doctor's availability." },
        { question: "Is there a minimum duration for an audio consultation?", answer: "The minimum duration varies but typically starts at 15 minutes." }
    ],
    Wallet: [
        { question: "How do I top up my wallet?", answer: "You can add funds via credit card, debit card, or UPI." },
        { question: "Is my wallet balance safe?", answer: "Yes, we use secure payment gateways to ensure your funds are safe." }
    ],
    Forum: [
        { question: "How do I post in the forum?", answer: "Simply log in and click 'Create Post' in the forum section." }
    ],
    Shop: [
        { question: "Do you ship internationally?", answer: "Yes, we ship to many countries worldwide." }
    ]
};

const FAQPage = () => {
    const [activeTab, setActiveTab] = useState('Consultation');
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <FAQHeader />
            {/* Hero Section with Search */}
            <div className="faq-hero">
                <h1>FAQ</h1>
                <div className="faq-search-wrapper">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search for any queries that you have" className="faq-search-input" />
                </div>
            </div>

            {/* Tabs */}
            <div className="faq-tabs-container">
                {Object.keys(faqs).map((tab) => (
                    <button
                        key={tab}
                        className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => { setActiveTab(tab); setActiveIndex(null); }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Accordion Content */}
            <div className="faq-content-container">
                {faqs[activeTab].map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="load-more-container">
                <button className="load-more-btn">Load More &gt;</button>
            </div>

            {/* App Download Section Reused */}
            <AppDownload />
        </div>
    );
};

export default FAQPage;
