import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "What is Amrutam?",
        answer: "Amrutam is an Ayurvedic Lifestyle Brand & Community striving to build a community of learning, sharing, and living the Vedic way."
    },
    {
        question: "How does Amrutam help me grow as a practitioner?",
        answer: "We provide a platform to connect with patients, manage appointments, and offer both online and offline consultations."
    },
    {
        question: "How do I become a part of Amrutam Doctor?",
        answer: "You can register by filling out the form on this page. Once verified, you can start your practice immediately."
    },
    {
        question: "Is there a fee to join Amrutam?",
        answer: "No, joining Amrutam as a doctor is completely free. We settle payments directly to your wallet."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="section-header">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">Find answers to common questions about joining Amrutam.</p>
            </div>

            <div className="faq-container">
                {faqs.map((faq, index) => (
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

            <button className="faq-see-more-btn">See More</button>
        </section>
    );
};

export default FAQ;
